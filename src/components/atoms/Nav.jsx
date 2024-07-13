import React from 'react';

function Nav({ href, children }) {
  return (
    <a href={href} className="text-black no-underline text-base">
      {children}
    </a>
  );
}

export default Nav;
