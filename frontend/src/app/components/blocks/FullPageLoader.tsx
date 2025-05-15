import React from 'react';
import Loader from '../common/Loader';

const FullPageLoader = () => (
  <div className="fixed inset-0 bg-[#1A202C] flex justify-center items-center z-50">
    <Loader />
  </div>
);

export default FullPageLoader;