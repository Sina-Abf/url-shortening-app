import { useEffect, useState } from 'react';
import Button from '../Ui/Button';
import axios from 'axios';

const Url = () => {
  const [inputLink, setInputLink] = useState('');
  const [fullData, setFullData] = useState([]);
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  const linkChangeHandler = (e) => {
    setInputLink(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsDoneTyping((prevState) => !prevState);

    const urlData = {
      initialUrl: inputLink,
    };

    setFullData((prevData) => prevData.concat(urlData));
  };

  const dataSendHandler = async () => {
    const response = await axios({
      method: 'post',
      url: `https://api.shrtco.de/v2/shorten?url=${inputLink}`,
    });

    const data = await response.data;

    // Adding shorted link to array
    const newCopiedArray = [...fullData];

    const toBeShorted = newCopiedArray.find(
      (linkItem) => linkItem.initialUrl === inputLink
    );
    if (toBeShorted.shortedLink) return;

    toBeShorted.shortedLink = data.result.full_short_link;

    console.log(toBeShorted);
  };

  console.log(fullData);

  useEffect(() => {
    if (fullData.length === 0) return;
    dataSendHandler();
  }, [isDoneTyping]);

  return (
    <section className="px-12 md:px-24 translate-y-1/2">
      <form
        onSubmit={formSubmitHandler}
        className="rounded-lg px-8 py-6 lg:py-8 lg:px-24 flex flex-col gap-y-4 bg-DarkViolet  mx-auto lg:flex-row lg:gap-x-4"
      >
        <input
          placeholder="Shorten a link here.."
          onChange={linkChangeHandler}
          className="px-3 py-3 rounded-lg lg:flex-1 lg:mx-auto outline-none"
          type="text"
        />
        <Button className="rounded-md py-3 lg:mx-auto">Shorten It!</Button>
      </form>
    </section>
  );
};

export default Url;
