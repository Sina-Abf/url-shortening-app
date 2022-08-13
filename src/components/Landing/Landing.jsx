import React from 'react';
import Button from '../Ui/Button';
import heroImg from '../../assets/images/illustration-working.svg';

const Landing = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:justify-between py-6 px-12 md:py-12 md:px-24">
      <div className="flex flex-col items-center text-center lg:text-start lg:block">
        <div className="lg:w-3/4 mb-2">
          <span className="font-bold text-6xl">
            More than just shorter links
          </span>
        </div>
        <p className="w-4/6 text-GrayishViolet mb-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="mb-10 lg:mb-0">Get Started</Button>
      </div>
      <div className="mb-8">
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Landing;
