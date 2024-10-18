import React from 'react';
import { Image } from 'react-bootstrap';
import { loader } from '../utils/icons';

function Loader() {
  return (
    <div className="backdrop">
      <span className="loader-bg">
        <Image src={loader} height={22} width={22} alt="Loader" />
      </span>
    </div>
  );
}

export default Loader;
