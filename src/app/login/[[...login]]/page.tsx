import { SignIn } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-300 to-purple-600 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome!</h1>
        <p className="text-gray-600 mb-6">
          Please choose any of the methods below to authenticate
        </p>
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
