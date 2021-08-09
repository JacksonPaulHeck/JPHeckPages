import React from 'react';
import Workexp from '../../components/Workexp/Workexp';
import { Container, Typography } from '@material-ui/core';
import './JPWorkExp.css';

function JPWorkExp(props){
  return(
  <Container>
  <Typography variant="h2">PROFESSIONAL EXPERIENCE</Typography>
  <Workexp
    companyTitle="J.B. HUNT TRANSPORTATION"
    companyLocation="Lowell, AR"
    jobTitle="APPLICATIONS DEVELOPMENT INTERN"
    jobDates="(June 2019 – August 2019, June 2020 — April 2021)"
    jobDescription="Worked with a team of interns on multiple summer-long projects; this internship utilized the AGILE Project Methodology and allowed me to become very experienced in this style of teamwork. Developed both front-end and back-end applications. Moved from an intern team to a full-time developer team and continued into the school year."
    workedOn="https://apiportal.jbhunt.com/"
    workedOnDescription="This is a link to the web service that I most recently put into production."
  />
  <Workexp
    companyTitle="TYSON FOODS"
    companyLocation="Springdale, AR"
    jobTitle="INFORMATION TECHNOLOGY INTERN"
    jobDates="(June 2021 – August 2021)"
    jobDescription="Worked with a team of interns on multiple summer-long projects; this internship utilized the AGILE Project Methodology and allowed me to become very experienced in this style of teamwork. Developed both front-end and back-end applications. Moved from an intern team to a full-time developer team and continued into the school year."
    workedOn="https://apiportal.jbhunt.com/"
    workedOnDescription="This is a link to the web service that I most recently put into production."
  />
  </Container>
);
};

JPWorkExp.propTypes = {};

JPWorkExp.defaultProps = {};

export default JPWorkExp;
