import React from 'react';
import logo from '../../images/logo.svg';
import Button from '../UI/Button';
import Link from '../UI/Link';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-28 py-6 bg-[#251D27]">
      <section className="logo flex-1">
        <img src={logo} alt="website logo" width={30} height={30} />
      </section>
      <section className="nav flex items-center flex-1 justify-between">
        <Link href="#Programs">Programs</Link>
        <Link href="#Projects">Projects</Link>
        <Link href="#Team">Team</Link>
        <Link href="#Partners">Partners</Link>
      </section>
      <section className="cta flex items-center justify-end flex-1">
        <Button>Contact us</Button>
      </section>
    </div>
  );
};

export default Navbar;
