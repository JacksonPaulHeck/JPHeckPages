import React from 'react';
import PropTypes from 'prop-types';
import './JPHonorsAndAwards.css';

function JPHonorsAndAwards(){
  return (
    <div className="Section">
    <h2 className="Section-title">HONORS & AWARDS</h2>
    <ul>
      <li>
        <h5>SMU Discovery Scholar 2019 - Present</h5>
      </li>
      <li>
        <h5>SMU Provost Scholar 2019 - Present</h5>
      </li>
      <li>
        <h5>National Merit Finalist Scholar 2019</h5>
      </li>
      <li>
        <h5>Fayetteville HS (Fayetteville, AR) Graduate with Distinguished Honors 2019 </h5>
      </li>
      <li>
        <h5>AP Scholar with Distinction 2018-2019</h5>
      </li>
    </ul>
    </div>
  );
}
JPHonorsAndAwards.propTypes = {};

JPHonorsAndAwards.defaultProps = {};

export default JPHonorsAndAwards;
