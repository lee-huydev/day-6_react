import './loader.css';
import React from 'react';

const Loader = () => {
   return (
      <div className="load">
         <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
   );
};
export default Loader;
