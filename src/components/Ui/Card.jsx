import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Card = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(200px)',
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={ref}
      className="flex justify-center items-center flex-col"
    >
      <div
        className={`bg-DarkViolet relative z-20 drop-shadow-md h-20 w-20 rounded-full flex items-center justify-center text-white translate-y-1/2 ${props.circleClassName}`}
      >
        <img src={props.icon} />
      </div>
      <div
        className={`bg-white shadow-lg rounded-lg text-center pb-12 ${props.className}`}
      >
        <h1 className="font-bold text-2xl mt-20 mb-2">{props.title}</h1>
        <p className="px-6 text-md text-GrayishViolet">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
