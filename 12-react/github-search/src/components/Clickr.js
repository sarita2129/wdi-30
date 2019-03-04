import React, { useState } from 'react';

export default () => {
  const [clicks, setClicks] = useState( 0 );

  const _incrementClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <button onClick={ _incrementClicks }>
      { clicks } clicks so far
    </button>
  );
};
