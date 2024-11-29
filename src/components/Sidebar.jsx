"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react'


const Sidebar = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <div className="w-80 bg-white border-r flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
      <UserButton className="flex items-center space-x-3"/>
          </div>
        </div>
      </div>
    
  )
}

export default Sidebar