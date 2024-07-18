import React from 'react';
import LoginCard from '../components/organisms/LoginCard';

function LoginPage() {
  return (
    <div className="relative h-screen bg-[#f1f2ce] flex items-center justify-center">
        <LoginCard />
        <img src="/logos.jpg" alt="Background" className="absolute top-0 z-10 w-[50%] h-[25%] m-4 rounded-md sm:w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%]" />
    </div>
  );
}

export default LoginPage;
  