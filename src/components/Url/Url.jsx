import { useEffect, useState } from 'react';
import Button from '../Ui/Button';
import axios from 'axios';
import UrlItem from './UrlItem';
import Spinner from '../Ui/Spinner';
import { motion } from 'framer-motion';

const Url = () => {
  const [inputLink, setInputLink] = useState('');
  const [initialData, setInitialData] = useState([]);
  const [newsetData, setNewsetData] = useState([]);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const linkChangeHandler = (e) => {
    setInputLink(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsDoneTyping((prevState) => !prevState);

    if (inputLink.trim().length === 0) {
      setIsEmpty(true);
      return;
    }

    const urlData = {
      initialUrl: inputLink,
    };

    setInitialData((prevData) => prevData.concat(urlData));
  };

  const dataSendHandler = async () => {
    setIsLoading(true);
    const response = await axios({
      method: 'post',
      url: `https://api.shrtco.de/v2/shorten?url=${inputLink}`,
    });

    const data = await response.data;

    if (!data.ok) {
      setIsEmpty(true);
    }

    setIsLoading(false);

    // Adding shorted link to array
    const newCopiedArray = [...initialData];

    const toBeShorted = newCopiedArray.find(
      (linkItem) => linkItem.initialUrl === inputLink
    );
    if (toBeShorted.shortedLink) return;

    toBeShorted.shortedLink = data.result.full_short_link;

    setNewsetData((prevData) => prevData.concat(toBeShorted));
  };

  useEffect(() => {
    if (initialData.length === 0) return;
    dataSendHandler();
  }, [isDoneTyping]);

  return (
    <section className=" px-12 pb-4 bg-DarkViolet rounded-lg w-11/12 mx-auto md:px-24 ">
      <form
        onSubmit={formSubmitHandler}
        className="py-10 flex flex-col gap-y-4 lg:flex-row lg:gap-x-4"
      >
        <input
          placeholder="Shorten a link here.."
          onChange={linkChangeHandler}
          value={inputLink}
          className="px-3 py-3 rounded-lg lg:flex-1 lg:mx-auto outline-none"
          type="text"
        />
        <Button className="rounded-md py-3 lg:mx-auto mb-4 lg:mb-0">
          {isLoading && <Spinner />}
          {!isLoading && 'Shorten It!'}
        </Button>
      </form>
      {isEmpty && (
        <p className="text-red-500 pb-4 text-center">
          Please Enter a Valid URL!
        </p>
      )}

      {!newsetData.length !== 0 &&
        newsetData.map((url) => {
          return (
            <motion.ul key={Math.random()}>
              <UrlItem
                initialUrl={url.initialUrl}
                shortedLink={url.shortedLink}
              />
            </motion.ul>
          );
        })}
    </section>
  );
};

export default Url;
