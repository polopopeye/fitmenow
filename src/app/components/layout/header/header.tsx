/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-white bg-neutral"
        >
          {/* <img
            src="/fitmenow.png"
            alt="logo"
            className="h-12 w-12 rounded-full mr-4"
          /> */}
          Fitmenow
        </Link>
      </div>
    </div>
  );
};

export default Header;
