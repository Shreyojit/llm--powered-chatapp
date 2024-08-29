import React from 'react';
import ChatTemplate from '../ChatTemplate/ChatTemplate';
import { dummyMessages, dummyReceiver, dummyUser } from './dummyData';

const Messages: React.FC = () => {
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



// import React from 'react';
// import GroupChatTemplate from '../GroupChatTemplate/GroupChatTemplate';
// import { dummyGroupConversation, dummyGroupMessages, dummyReceiver, dummyUser } from './groupChatData';


// const Messages: React.FC = () => {
//   return (
//     <div className="w-screen h-screen flex">
//       <GroupChatTemplate 
//         user={dummyUser} 
//         receiver={dummyReceiver} // This could be group info in case of group chat
//         messages={dummyGroupMessages} 
//         conversation={dummyGroupConversation} // Pass the conversation prop
//       />
//     </div>
//   );
// }

// export default Messages;
