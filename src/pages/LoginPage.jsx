import React from 'react';
import LoginCard from '../components/organisms/LoginCard';

function LoginPage() {
  return (
    <div className="relative h-screen bg-white flex items-center justify-center">
        <LoginCard />
        <img
        src="/logos.jpeg"
        alt="Background"
        className="absolute bottom-0 left-0 w-[15%] h-[25%] m-4 rounded-md"
      />
    </div>
  );
}

export default LoginPage;
