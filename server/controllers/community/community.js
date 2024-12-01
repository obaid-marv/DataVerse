import Connection from "../../models/community/Connection.js";

  export const sendFriendRequest = async (req, res, next) => {
    const { receiverId } = req.params;
    const senderId = req.user.id; 
  
    try {
      const existingRequest = await Connection.findOne({
        sender: senderId,
        receiver: receiverId,
      });
  
      if (existingRequest) {
        return res.status(400).json({ message: "Friend request already sent." });
      }
  
      const connection = new Connection({
        sender: senderId,
        receiver: receiverId,
      });
  
      await connection.save();
      res.status(201).json({ message: "Friend request sent." });
    } catch (err) {
      next(err);
    }
  };


  export const acceptFriendRequest = async (req, res, next) => {
    const { requestId } = req.params;
  
    try {
      const connection = await Connection.findById(requestId);
  
      if (!connection || connection.status !== "pending") {
        return res.status(404).json({ message: "Friend request not found." });
      }
  
      connection.status = "accepted";
      await connection.save();
  
      await User.findByIdAndUpdate(connection.sender, {
        $addToSet: { friends: connection.receiver },
      });
  
      await User.findByIdAndUpdate(connection.receiver, {
        $addToSet: { friends: connection.sender },
      });
  
      res.status(200).json({ message: "Friend request accepted." });
    } catch (err) {
      next(err);
    }
  };
  
  export const rejectFriendRequest = async (req, res, next) => {
    const { requestId } = req.params;
  
    try {
      const connection = await Connection.findById(requestId);
  
      if (!connection || connection.status !== "pending") {
        return res.status(404).json({ message: "Friend request not found." });
      }
  
      connection.status = "rejected";
      await connection.save();
  
      res.status(200).json({ message: "Friend request rejected." });
    } catch (err) {
      next(err);
    }
  };

  export const getFriendRequests = async (req, res, next) => {
    const userId = req.user.id;
  
    try {
      const requests = await Connection.find({
        receiver: userId,
        status: "pending",
      }).populate("sender", "username imgUrl");
  
      res.status(200).json(requests);
    } catch (err) {
      next(err);
    }
  };
  