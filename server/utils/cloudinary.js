import { v2 as cloudinary } from 'cloudinary';

// Configuration for Cloudinary
cloudinary.config({ 
  cloud_name: 'dj6mz8wmq', 
  api_key: '381422438311452', 
  api_secret: "LY1sllIqJiDE3n5OJYo1xDfuu-E", // Store your API secret in environment variables
});

export default cloudinary;
