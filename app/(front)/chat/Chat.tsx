import Messages from '@/components/template/Messages/Messages'
import Sidebar from '@/components/template/Sidebar/Sidebar'
import React from 'react'

const Chat = () => {
  return (
    <div className="min-h-screen">
        <div className="mx-auto flex">

          {/* SIDEBAR */}
          <Sidebar/>
        {/* MESSAGES */}
        <Messages/>


        </div>
    </div>
  )
}

export default Chat