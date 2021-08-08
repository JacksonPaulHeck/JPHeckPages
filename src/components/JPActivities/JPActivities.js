import React from 'react';
import PropTypes from 'prop-types';
import './JPActivities.css';

function JPActivities(){
  return (
    <div className="Section">
    <h2 className="Section-title">EXTRACURRICULAR ACTIVITIES</h2>
    <h3>SOUTHERN METHODIST UNIVERSITY, Dallas, TX</h3>
    <ul>
      <li>
        <h5>SMU Ultimate Frisbee Team</h5>
      </li>
      <li>
        <h5>SMU Computer Science Club</h5>
      </li>
      <li>
        <h5>Kappa Sigma Fraternity – Delta Pi Chapter</h5>
      </li>
    </ul>
    <h3>NATIONWIDE</h3>
    <ul>
      <li>
        <h5>World Cube Association - Competitor, Judge</h5>
      </li>
    </ul>
    </div>
  );
}

JPActivities.propTypes = {};

JPActivities.defaultProps = {};

export default JPActivities;
