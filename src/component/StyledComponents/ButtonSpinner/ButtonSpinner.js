import React from 'react';

const ButtonSpinner = () => {
   return (
      <button className="btn btn-dark w-100" type="button" disabled>
         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
      </button>
   );
};

export default ButtonSpinner;