import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  const authLinks = (
    <Fragment>
      <p>auth links</p>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <p>guest links</p>
    </Fragment>
  );

  return (
    <div className=''>
      <h2>
        <Link to='/'>Navbar</Link>
      </h2>
    </div>
  );
};

export default Navbar;
