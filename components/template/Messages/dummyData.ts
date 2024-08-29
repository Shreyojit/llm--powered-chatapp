// dummyData.ts
import { Message, User } from '@/components/organisms/models';

export const dummyUser: User = {
  id: 'user1',
  name: 'John Doe',
  email: 'johndoe@email.com',
  image: 'https://randomuser.me/api/portraits/men/67.jpg',
  tokenIdentifier: 'token123',
  isOnline: true,
};

export const dummyReceiver: User = {
  id: 'user2',
  name: 'Jane Doe',
  email: 'janedoe@email.com',
  image: 'https://randomuser.me/api/portraits/women/67.jpg',
  tokenIdentifier: 'token124',
  isOnline: true,
};

export const dummyMessages: Message[] = [
  {
    id: '1',
    conversation: '1',
    sender: 'John Doe',
    content: 'Hello everyone!',
    messageType: 'text',
  },
  {
    id: '2',
    conversation: '1',
    sender: 'Jane Doe',
    content: 'Hey there!',
    messageType: 'text',
  },
  {
    id: '3',
    conversation: '1',
    sender: 'John Doe',
    content: 'How\'s it going!?',
    messageType: 'text',
  },
  {
    id: '4',
    conversation: '1',
    sender: 'Jane Doe',
    content: 'Fine, thanks!',
    messageType: 'text',
  },
];
