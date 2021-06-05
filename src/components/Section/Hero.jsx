import React from 'react';
import OutlinedButton from '../UI/OutlinedButton';
import heroImage from '../../images/bicycle.jpg';

const Hero = () => {
  return (
    <div className="bg-[#251D27] px-28 py-8 leading-tight">
      <section className="headingP1">
        <h1 className="text-[10rem] font-bold text-white">Rethinking</h1>
      </section>
      <div className="flex items-center py-16">
        <section className="flex-1 relative flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full">
            <img
              src={heroImage}
              alt="hero images"
              className="h-full w-full object-cover rounded-full relative z-10"
            />
            <div className="h-[400px] w-[400px] rounded-full absolute border-dashed border-2 border-[#FCCF08] top-[30px]"></div>
          </div>
        </section>
        <section className="headingP2 flex-1 transform -translate-y-20">
          <h1 className="strokeHeading text-[12rem] font-bold text-[#251D27]">
            Impact
          </h1>
          <p className="text-md text-[#B2ABB3] flex flex-col leading-8 tracking-wide pt-6 pb-10">
            <span>Out mission revolutionize financial literacy</span>
            <span>and make it universally accessible and useful.</span>
          </p>
          <OutlinedButton>Donate to us</OutlinedButton>
        </section>
      </div>
    </div>
  );
};

export default Hero;
