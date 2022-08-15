import React from 'react';
import Button from '../Ui/Button';

const UrlItem = (props) => {
  return (
    <li className="bg-white divide-y-2 lg:divide-y-0 w-full p-2 flex flex-col gap-y-2 mb-4 lg:mb-0 lg:gap-y-0 lg:flex-row lg:items-center lg:justify-between lg:mb-2 rounded-lg">
      <h1>{props.initialUrl}</h1>
      <div className="flex w-full lg:w-auto flex-col lg:flex-row lg:gap-x-2 lg:items-center">
        <a
          className="text-Cyan mb-4 lg:mb-0 mt-2 lg:mt-0"
          target="_blank"
          href={props.shortedLink}
        >
          {props.shortedLink}
        </a>
        <Button className="w-full rounded-md">Copy</Button>
      </div>
    </li>
  );
};

export default UrlItem;