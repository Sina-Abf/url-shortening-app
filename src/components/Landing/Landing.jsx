import React from 'react';
import Button from '../Ui/Button';
import heroImg from '../../assets/images/illustration-working.svg';

const Landing = () => {
  return (
    <section className="flex justify-between ">
      <div>
        <div className="w-3/4 mb-2">
          <span className="font-bold text-6xl">
            More than just shoter links
          </span>
        </div>
        <p className="w-4/6 text-GrayishViolet mb-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
      <div>
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Landing;
