import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import GroupModel from '@/lib/models/GroupSchema';
import GroupMessageModel from '@/lib/models/GroupMessageSchema';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { groupId, senderId, message, type } = await request.json();

    // Check if the group exists and includes the sender as a member
    const group = await GroupModel.findById(groupId);
    if (!group) {
      return NextResponse.json({ message: 'Group not found.' }, { status: 404 });
    }

    if (!group.members.includes(senderId)) {
      return NextResponse.json({ message: 'Sender is not a member of the group.' }, { status: 403 });
    }

    // Create and save the new message
    const newMessage = new GroupMessageModel({
      groupId,
      senderId,
      message,
      type,
      sendAt: new Date(),
    });

    await newMessage.save();
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    console.log(searchParams)
    const messageId = searchParams.get('messageId');
    const userId = searchParams.get('userId');

    if (!messageId || !userId) {
      return NextResponse.json({ message: 'Message ID and User ID are required.' }, { status: 400 });
    }

    // Find the message to be deleted
    const message = await GroupMessageModel.findById(messageId);
    if (!message) {
      return NextResponse.json({ message: 'Message not found.' }, { status: 404 });
    }

    // Find the group associated with the message
    const group = await GroupModel.findById(message.groupId);
    if (!group) {
      return NextResponse.json({ message: 'Group not found.' }, { status: 404 });
    }

    // Check if the user is a member of the group
    if (!group.members || !group.members.includes(userId)) {
      return NextResponse.json({ message: 'User is not a member of the group.' }, { status: 403 });
    }

    // Check if the user is the sender of the message
    if (message.senderId !== userId) {
      return NextResponse.json({ message: 'You can only delete your own messages.' }, { status: 403 });
    }

    // Delete the message
    await GroupMessageModel.findByIdAndDelete(messageId);

    return NextResponse.json({ message: 'Message deleted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  await dbConnect();

  try {
    const { messageId, userId, newMessageContent } = await request.json();

    if (!messageId || !userId || !newMessageContent) {
      return NextResponse.json({ message: 'Message ID, User ID, and new content are required.' }, { status: 400 });
    }

    const message = await GroupMessageModel.findById(messageId);

    if (!message) {
      return NextResponse.json({ message: 'Message not found.' }, { status: 404 });
    }

    const group = await GroupModel.findById(message.groupId);
    if (!group) {
      return NextResponse.json({ message: 'Group not found.' }, { status: 404 });
    }

    if (message.senderId.toString() !== userId && !group.admins.includes(userId)) {
      return NextResponse.json({ message: 'You are not authorized to edit this message.' }, { status: 403 });
    }

    message.message = newMessageContent;
    await message.save();

    return NextResponse.json({ message: 'Message updated successfully.', updatedMessage: message }, { status: 200 });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
