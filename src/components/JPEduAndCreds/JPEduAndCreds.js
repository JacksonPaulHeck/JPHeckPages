import React from 'react';
import PropTypes from 'prop-types';
import './JPEduAndCreds.css';

function JPEduAndCreds(){
    return (
    <div className="Section">
    <h2 className="Section-title">EDUCATION & CREDENTIALS</h2>
    <h3>SOUTHERN METHODIST UNIVERSITY, Dallas, TX</h3>
    <ul>
      <li>
        <h5>Double Major in Computer Science and Mathematics, Minor in Spanish, (Spring 2023)</h5>
      </li>
    </ul>
    <ul>
      <h4>Programming Experience</h4>
      <li>
        <h5>Java, JavaScript, C++, Python, TypesScript, React, AngularJS, Java Spring, SQL</h5>
      </li>
    </ul>
    <ul>
      <h4>Certifications</h4>
      <li>
        <h5>Arkansas Seal of Biliteracy</h5>
      </li>
    </ul>
    </div>
  );
};

JPEduAndCreds.propTypes = {};

JPEduAndCreds.defaultProps = {};

export default JPEduAndCreds;
