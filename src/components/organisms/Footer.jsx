import React from 'react';
import SocialIcons from '../molecules/SocialIcons';

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-xl mx-[10%] py-6 flex justify-between items-center mt-4">
        <div>© 2024 Bey's Cafe</div>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
