import React, { useState } from 'react';
import { FaReply, FaArrowUp, FaArrowDown, FaShareAlt } from 'react-icons/fa';
import { IMAGES } from '../../assets';

const initialReplies = [
  {
    id: 1,
    user: 'Jane Smith',
    avatar: IMAGES.avatar4, // Use actual avatar path
    content: 'I recommend using pandas for data cleaning!',
    upvotes: 10,
    timestamp: '1 hour ago',
    badge: 'Top Contributor',
    hasUpvoted: false,
    hasDownvoted: false,
  },
  {
    id: 2,
    user: 'John Doe',
    avatar: IMAGES.avatar3, // Use actual avatar path
    content: 'Numpy can be quite helpful too!',
    upvotes: 7,
    timestamp: '2 hours ago',
    badge: 'Frequent Helper',
    hasUpvoted: false,
    hasDownvoted: false,
  },
  // Add more replies as needed
];

const DiscussionDetail = () => {
  const [replies, setReplies] = useState(initialReplies);
  const [replyText, setReplyText] = useState('');
  const [sortedBy, setSortedBy] = useState('upvotes');
  const [isFollowing, setIsFollowing] = useState(false);

  const handleUpvote = (replyId) => {
    setReplies((prevReplies) =>
      prevReplies.map((reply) => {
        if (reply.id === replyId) {
          // If the user has already upvoted, undo the upvote
          if (reply.hasUpvoted) {
            return { ...reply, upvotes: reply.upvotes - 1, hasUpvoted: false };
          }
          // If the user has downvoted before, remove the downvote first
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
          // If the user has upvoted before, remove the upvote first
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

  const handleReply = () => {
    // Logic for handling reply submission
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // Logic to add/remove the discussion from the followed discussions list
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-4xl font-bold text-customBlue">Best Practices for Data Cleaning</h1>
        <div className="flex items-center mt-4 text-gray-500">
          <span>Posted by <span className="font-semibold">Alice Johnson</span></span>
          <span className="ml-4 text-sm">• 50 views • 15 replies</span>
          <FaShareAlt className="ml-auto text-xl cursor-pointer" />
        </div>
        <p className="mt-4 text-gray-700 text-lg">
          What tools are best for data cleaning in Python? I’m working on cleaning a large dataset and want to know what libraries I should consider.
        </p>
        <button
          onClick={handleFollow}
          className={`mt-4 px-4 py-2 rounded-md ${isFollowing ? 'bg-gray-400' : 'bg-customBlue'} text-white`}
        >
          {isFollowing ? 'Unfollow Discussion' : 'Follow Discussion'}
        </button>
      </div>

      {/* Sorting and Interaction Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-bold">Replies</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
            className="border rounded-md p-2 text-gray-600"
          >
            <option value="upvotes">Upvotes</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Replies Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {replies.map((reply) => (
          <div key={reply.id} className="border-b py-4 flex items-start">
            <img src={reply.avatar} alt={reply.user} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{reply.user}</p>
                  {reply.badge && (
                    <span className="bg-customBlue text-white px-2 py-1 text-xs rounded-full">
                      {reply.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <FaArrowUp
                    className={`cursor-pointer hover:text-green-600 ${reply.hasUpvoted && 'text-green-600'}`}
                    onClick={() => handleUpvote(reply.id)}
                  />
                  <span>{reply.upvotes}</span>
                  <FaArrowDown
                    className={`cursor-pointer hover:text-red-600 ${reply.hasDownvoted && 'text-red-600'}`}
                    onClick={() => handleDownvote(reply.id)}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{reply.content}</p>
              <div className="flex items-center text-gray-500 mt-2">
                <span className="text-xs">{reply.timestamp}</span>
                <FaReply className="ml-4 text-customBlue cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>
        ))}

        {/* Reply Text Area */}
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="w-full mt-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
          placeholder="Write your reply..."
        />
        <button
          onClick={handleReply}
          className="mt-4 bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Reply
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-8 bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-customBlue">Join the Conversation!</h3>
        <p className="mt-2 text-gray-700">
          Have thoughts to share? Don't hesitate to participate in the discussion and help the community grow. Your insights could be invaluable to others!
        </p>
        <button className="mt-4 bg-customBlue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Post a Reply
        </button>
      </div>
    </div>
  );
};

export default DiscussionDetail;
