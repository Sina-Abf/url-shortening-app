import React from 'react';
import Button from '../Ui/Button';
import heroImg from '../../assets/images/illustration-working.svg';

const Landing = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between">
      <div className="flex flex-col items-center text-center md:text-start md:block">
        <div className="w-3/4 md:w-full mb-2">
          <span className="font-bold text-6xl">
            More than just shorter links
          </span>
        </div>
        <p className="w-3/6 text-GrayishViolet mb-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="mb-8 md:mb-0">
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Landing;
