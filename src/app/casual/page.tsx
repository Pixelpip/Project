"use client";
import ChatWindow from '@/components/ChatWindow';
import Sidebar from '@/components/Sidebar';
import React from 'react'


const page = () => {
  return (
    <div className='flex h-screen w-screen'>
    <Sidebar/>
    <ChatWindow/>
  </div>
  )
}

export default page