import React, { FC, useState, createContext, useMemo } from 'react';
import { render } from 'react-dom';
import Card from './Card';
import './styles/index.css'

export const Context = createContext<{ rerun: boolean; setRerun: any }>({
  rerun: false,
  setRerun: () => {},
});
const App: FC = () => {
  const [rerun, setRerun] = useState(false);
  const value = useMemo(() => ({ rerun, setRerun }), [rerun]);

  return (
    <Context.Provider value={value}>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              Just some Cats
            </h2>

            <button
              onClick={() => setRerun(true)}
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              Show me more cats
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

render(<App />, document.getElementById('root'));
