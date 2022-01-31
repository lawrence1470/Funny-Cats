import React, { FC, useContext, useEffect } from 'react';
import { useFetch } from 'react-async';
import { Oval } from 'react-loader-spinner';
import { Context } from './index';

const Card: FC = () => {
  const { data, isFulfilled, reload } = useFetch(
    'https://random-cat-picture.p.rapidapi.com/meow',
    {
      headers: {
        'x-rapidapi-host': 'random-cat-picture.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.REACT_APP_CAT_API}`,
        Accept: 'application/json',
      },
    }
  );

  console.log(process.env.REACT_CAT_API)

  const { rerun, setRerun } = useContext(Context);

  useEffect(() => {
    if (rerun) {
      reload();
      setRerun(false);
    }
  }, [rerun]);

  return (
    <div>
      {isFulfilled ? (
        <div>
          <div
            className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
          >
            <img
              src={(data as { file: string }).file}
              loading="lazy"
              alt="Photo by Austin Wade"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <Oval width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
    </div>
  );
};

export default Card;
