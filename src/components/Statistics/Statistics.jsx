import React from 'react';
import Card from '../Ui/Card';
import brand from '../../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../../assets/images/icon-detailed-records.svg';
import customize from '../../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className="bg-GrayishViolet/20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="translate-y-24 lg:translate-y-24 font-bold text-2xl lg:text-4xl mb-2">
          Advanced Statistics
        </h1>
        <p className="translate-y-24 lg:translate-y-24 text-md text-GrayishViolet w-5/12 md:w-1/4 text-center">
          Track how your links are performing across the web with our advanced
          stastics dashboard.
        </p>
      </div>
      <div className="relative flex flex-col items-center lg:flex-row lg:gap-x-8 w-2/3  mx-auto">
        <div className="w-2 h-1/2 lg:h-5/6 bg-Cyan absolute lg:rotate-90 top-60 lg:top-10 lg:left-2/4 -z-10" />
        <Card
          icon={brand}
          circleClassName="mt-20 lg:mt-0 translate-y-2/3 lg:translate-y-1/2 lg:-translate-x-20"
          className="mt-6 lg:mt-0 p-3"
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={detailedRecords}
          circleClassName="lg:translate-y-28 lg:-translate-x-20"
          className="lg:mt-20 p-3 md:0"
          title="Detailed Records"
          subtitle="Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          icon={customize}
          title="Fully Customizable"
          circleClassName="lg:translate-y-56 lg:-translate-x-20"
          className="lg:mt-48 mb-10 p-3 md:0"
          subtitle="Improve brand awareness and content discoverabillity through customizable links, supercharhing audeince engagement"
        />
      </div>
    </section>
  );
};

export default Statistics;
