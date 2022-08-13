import React from 'react';
import Button from '../Ui/Button';
const Url = () => {
  return (
    <section className="px-12 md:px-24 translate-y-1/2">
      <form className="rounded-lg px-8 py-6 lg:py-8 lg:px-24 flex flex-col gap-y-4 bg-DarkViolet  mx-auto lg:flex-row lg:gap-x-4">
        <input
          placeholder="Shorten a link here.."
          className="px-3 py-3 rounded-lg lg:flex-1 lg:mx-auto outline-none"
          type="text"
        />
        <Button className="rounded-md py-3 lg:mx-auto">Shorten It!</Button>
      </form>
    </section>
  );
};

export default Url;
