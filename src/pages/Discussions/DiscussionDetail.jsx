import React, { useState, useEffect } from 'react';
import { FaReply, FaArrowUp, FaArrowDown, FaShareAlt } from 'react-icons/fa';
import { IMAGES } from '../../assets';
import { useParams } from 'react-router-dom';
import { AddReplyToDiscussion, getDiscussionById } from '../../api/discussion';
import { toast } from 'react-toastify';
import { formatDistanceToNow } from 'date-fns';

const DiscussionDetail = () => {
  const [replyText, setReplyText] = useState('');
  const [sortedBy, setSortedBy] = useState('upvotes');
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [discussion, setDiscussion] = useState(null);
  const [replies, setReplies] = useState([]);
  const { id: discussionId } = useParams();


  

  const handleUpvote = (replyId) => {
    setReplies((prevReplies) =>
      prevReplies.map((reply) => {
        if (reply.id === replyId) {
          if (reply.hasUpvoted) {
            return { ...reply, upvotes: reply.upvotes - 1, hasUpvoted: false };
          }

          if (reply.hasDownvoted) {
            return {
              ...reply,
              upvotes: reply.upvotes + 2,
              hasUpvoted: true,
              hasDownvoted: false,
            };
          }
          return { ...reply, upvotes: reply.upvotes + 1, hasUpvoted: true };
        }
        return reply;
      })
    );
  };

  const handleDownvote = (replyId) => {
    setReplies((prevReplies) =>
      prevReplies.map((reply) => {
        if (reply.id === replyId) {
          // If the user has already downvoted, undo the downvote
          if (reply.hasDownvoted) {
            return { ...reply, upvotes: reply.upvotes + 1, hasDownvoted: false };
          }
          if (reply.hasUpvoted) {
            return {
              ...reply,
              upvotes: reply.upvotes - 2,
              hasDownvoted: true,
              hasUpvoted: false,
            };
          }
          return { ...reply, upvotes: reply.upvotes - 1, hasDownvoted: true };
        }
        return reply;
      })
    );
  };

  const handleReply = async () => {
    if (!replyText.trim()) {
      toast.error('Reply cannot be empty.');
      return;
    }
  
    const replyData = {
      content: replyText,
    };
  
    try {
      const newDiscussionData = await AddReplyToDiscussion(discussionId, replyData);
    
      if (newDiscussionData) {
        setReplies(newDiscussionData.discussion.replies);
        setReplyText('');
        toast.success('Reply posted successfully!');
      } else {
        toast.error('Failed to post reply. Please try again.');
      }
    } catch (error) {
      console.error('Error posting reply:', error);
      toast.error('An error occurred while posting your reply.');
    }
  };
  

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const relativeTime = discussion?.lastReplyAt 
  ? formatDistanceToNow(new Date(discussion.lastReplyAt), { addSuffix: true }) 
  : 'Unknown';

  useEffect(() => {
    const fetchDiscussionDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getDiscussionById(discussionId);
        if (response) {
          console.log("discussion detail:", response.discussion)
          setDiscussion(response.discussion)
          setReplies(response.discussion.replies)
        } else {
          setError('Failed to fetch discussion details.');
        }
      } catch (err) {
        setError('An error occurred while fetching the discussion.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscussionDetails();
  }, [discussionId]);

  return (
    <div className="p-8 bg-gray-100 max-h-max font-poppins w-full">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-4xl font-bold text-customBlue">{discussion?.title}</h1>
        <div className="flex items-center mt-4 text-gray-500">
          <span>Posted by <span className="font-semibold">{discussion?.author.username}</span></span>
          <span className="ml-4 text-sm">{replies.length==0? "• Posted " : "• Last Replied "} {relativeTime} • {discussion?.replies.length} replies</span>
          {/* <FaShareAlt className="ml-auto text-xl cursor-pointer" /> */}
        </div>
        <p className="mt-4 text-gray-700 text-lg">
          {discussion?.content}
        </p>
        {/* <button
          onClick={handleFollow}
          className={`mt-4 px-4 py-2 rounded-md ${isFollowing ? 'bg-gray-400' : 'bg-customBlue'} text-white`}
        >
          {isFollowing ? 'Unfollow Discussion' : 'Follow Discussion'}
        </button> */}
      </div>

      {/* Sorting and Interaction Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-bold">Replies</h2>
        {/* <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
            className="border rounded-md p-2 text-gray-600"
          >
            <option value="upvotes">Upvotes</option>
            <option value="newest">Newest</option>
          </select>
        </div> */}
      </div>

      {/* Replies Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {replies.map((reply) => (
          <div key={reply._id} className="border-b py-4 flex items-start">
            <img src={reply.author?.imgUrl || "https://robohash.org/placeholder-avatar"} alt={reply.user} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{reply.author?.username}</p>
                  {reply.badge && (
                    <span className="bg-customBlue text-white px-2 py-1 text-xs rounded-full">
                      {reply.badge}
                    </span>
                  )}
                </div>
                {/* <div className="flex items-center space-x-2 text-gray-500">
                  <FaArrowUp
                    className={`cursor-pointer hover:text-green-600 ${reply.hasUpvoted && 'text-green-600'}`}
                    onClick={() => handleUpvote(reply.id)}
                  />
                  <span>{reply?.upvotes}</span>
                  <FaArrowDown
                    className={`cursor-pointer hover:text-red-600 ${reply.hasDownvoted && 'text-red-600'}`}
                    onClick={() => handleDownvote(reply.id)}
                  />
                </div> */}
              </div>
              <p className="text-sm text-gray-600 mt-2">{reply.content}</p>
              <div className="flex items-center text-gray-500 mt-2">
                <span className="text-xs">{reply.timestamp}</span>
                {/* <FaReply className="ml-4 text-customBlue cursor-pointer hover:text-blue-700" /> */}
              </div>
            </div>
          </div>
        ))}

        {/* Reply Text Area */}
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="w-full mt-4 p-3 border resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
          placeholder="Write your reply..."
        />
        <button
          onClick={handleReply}
          className="mt-4 bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Reply
        </button>
      </div>

    </div>
  );
};

export default DiscussionDetail;
