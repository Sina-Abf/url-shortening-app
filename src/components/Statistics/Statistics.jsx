import React from 'react';
import Card from '../Ui/Card';
import brand from '../../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../../assets/images/icon-detailed-records.svg';
import customize from '../../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className="bg-GrayishViolet/20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold mt-32 text-2xl mb-2">Advances Statistics</h1>
        <p className="text-sm text-GrayishViolet w-5/12 md:w-1/4 text-center">
          Track how your links are performing across the web with our advanced
          stastics dashboard.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-2/3  mx-auto">
        <Card
          icon={brand}
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={detailedRecords}
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={customize}
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content."
        />
      </div>
    </section>
  );
};

export default Statistics;
