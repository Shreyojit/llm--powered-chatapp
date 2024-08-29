import React from 'react';
import ChatTemplate from '../ChatTemplate/ChatTemplate';
import { dummyMessages, dummyReceiver, dummyUser } from './dummyData';

const Messages = () => {
  return (
    <div className="w-screen h-screen flex">
      <ChatTemplate 
        user={dummyUser} 
        receiver={dummyReceiver} 
        messages={dummyMessages} 
      />
    </div>
  );
}

export default Messages;
