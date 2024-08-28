"use client"
import React, { useState } from 'react';
import Avatar from '../atoms/Avatar';


import SearchBarInput from '../molecules/SearchBarInput';
import { userProps } from '@/types';
import IconButton from '../atoms/IconButton';

import CreateGroupChatModal from '../CreateGroupChatModal';

// Example dummy data
const dummyUsers = [
    {
      _id: '1',
      name: 'John Doe',
      image: '/path/to/avatar1.png',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      image: '/path/to/avatar2.png',
    },
    {
        _id: '3',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '4',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '5',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '6',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '7',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '11',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '13',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },{
        _id: '15',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '18',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '19',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },
      {
        _id: '20',
        name: 'Jane Smith',
        image: '/path/to/avatar2.png',
      },

    // Add more users as needed
  ];

interface SearchBarProps {
  user: userProps;
}

const SearchBar: React.FC<SearchBarProps> = ({ user }) => {
 
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    return (
    <div className="flex items-center justify-between gap-4 bg-white p-2 border border-gray-200 rounded-lg shadow-md">
      <Avatar imageSrc={user?.imageId || ""} />
      <SearchBarInput placeholder="Search" />
      <IconButton onClick={handleOpenModal} className="ml-2" />
      <CreateGroupChatModal isOpen={isModalOpen} onClose={handleCloseModal}
       users={dummyUsers} />
    </div>
  );
};

export default SearchBar;
