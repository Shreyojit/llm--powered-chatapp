'use client'

import React, { useState } from 'react';
import { FlashIcon, SendMsIcon } from '@/lib/utils/icons'; // Adjust the import path as necessary
import { Conversation, Message, User } from '../Messages/model';
import { MdAttachFile, MdEmojiEmotions, MdSend } from 'react-icons/md';
import { FlashlightIcon } from 'lucide-react';

interface GroupChatTemplateProps {
  user: User;
  receiver: User; // This might be group info in case of group chat
  messages: Message[];
  conversation: Conversation; // Add this prop
}

const GroupChatTemplate: React.FC<GroupChatTemplateProps> = ({ user, receiver, messages, conversation }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your send message logic here
    console.log('Send message:', inputValue);
    setInputValue('');
  };

  return (
    <div className="bg-white flex flex-col h-full w-full shadow-lg">
      {/* Topbar */}
      <div className="bg-gray-100 border-b border-gray-300 flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {conversation.isGroup ? (
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={conversation.groupImage} alt={conversation.groupName} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={receiver.image} alt={receiver.name} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{conversation.isGroup ? conversation.groupName : receiver.name}</h3>
            <p className="text-gray-500">{receiver.isOnline ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FlashlightIcon />
        </button>
      </div>

     {/* Messages List */}
<div className="flex-1 overflow-y-auto p-4">
  <div className="flex flex-col space-y-4">
    {messages.map((message) => (
      <div
        key={message._id}
        className={`flex ${message.senderId === user._id ? 'justify-end' : 'justify-start'}`}
      >
        {/* Message from Other Users */}
        {message.senderId !== user._id && (
          <div className="flex items-start space-x-2">
            {/* User Avatar */}
            <img
              src={message.senderId.image} // Assuming `sender` object is available in the message
              alt={message.senderId.name} // Assuming `sender` object is available in the message
              className="w-8 h-8 rounded-full"
            />
            <div>
              {/* Sender's Name */}
              <p className="text-sm text-gray-500">{message.senderId.name}</p>
              {/* Message Content */}
              <div className="px-4 py-2 rounded-lg max-w-xs bg-gray-200">
                {message.content}
              </div>
            </div>
          </div>
        )}

        {/* Message from Current User */}
        {message.senderId === user._id && (
          <div className="flex items-start space-x-2">
            {/* Message Content */}
            <div className="px-4 py-2 rounded-lg max-w-xs bg-blue-500 text-white">
              {message.content}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>


      {/* Message Input */}
      <form className="bg-gray-100 p-4 flex items-center" onSubmit={handleSendMessage}>
  {/* Emoji Icon */}
  <MdEmojiEmotions className="text-gray-500 w-6 h-6 mr-2 cursor-pointer" />

  {/* Attachment Icon */}
  <MdAttachFile className="text-gray-500 w-6 h-6 mr-2 cursor-pointer" />

  {/* Input Field */}
  <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    placeholder="Type your message..."
    className="flex-1 mr-2 pl-4 rounded-full border border-gray-300 bg-gray-100 placeholder:text-gray-500"
  />

  {/* Send Button */}
  <button type="submit" className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
    <MdSend />
  </button>
</form>
    </div>
  );
};

export default GroupChatTemplate;
