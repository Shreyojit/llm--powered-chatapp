import mongoose from 'mongoose';

// User Schema
export type User = {
  _id: string;
  name?: string;
  email: string;
  image: string;
  tokenIdentifier: string;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
};

// Conversation Schema
export type Conversation = {
  _id: string;
  isGroup: boolean;
  groupName?: string;
  groupImage?: string;
  admin?: string; // User ObjectId
  participants: string[]; // Array of User ObjectIds
  createdAt: string;
  updatedAt: string;
};

// Message Schema
export type Message = {
  _id: string;
  conversationId: string; // Conversation ObjectId
  senderId: string; // User ObjectId
  content: string;
  messageType: 'text' | 'image' | 'video';
  createdAt: string;
  updatedAt: string;
};
