import portrait from './JacksonPaulHeckPhoto.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="TitleName">Jackson Paul Heck</h1>
        <h3 className="ContactInfo">(479) 530-7351 • jacksonheck1@gmail.com</h3>
        <img alt="JPHPhoto" src={portrait}></img>
      </header>
      <body className="App-body">
        <div className="Section">
        <h2 className="Section-title">PROFESSIONAL EXPERIENCE</h2>
        <h3>J.B. HUNT TRUCKING COMPANY, Lowell, AR</h3>
        <ul>
        <h4>APPLICATIONS DEVELOPMENT INTERN (June 2019 – August 2019, June 2020 — April 2021)</h4>
          <li>
            <h5>Worked with a team of interns on multiple summer-long projects; this internship utilized the AGILE Project Methodology and allowed me to become very experienced in this style of teamwork. Developed both front-end and back-end applications. Moved from an intern team to a full-time developer team and continued into the school year.</h5>
          </li>
          <li>
            <h5>https://apiportal.jbhunt.com/ <br/> This is a link to the web service that I most recently put into production.</h5>
          </li>
        </ul>
        </div>

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

        <div className="Section">
        <h2 className="Section-title">COMMUNITY SERVICE & LEADERSHIP</h2>
        <h3>LEADERSHIP ROLES</h3>
        <ul>
        <h4>Kappa Sigma Fraternity Officer - Grand Scribe (Elected 2020)</h4>
          <li>
            <h5>This position is on the executive committee for the Delta-Pi chapter of Kappa Sigma. Youngest ranking member of the executive committee. Oversee chair positions of the fraternity. Another important role for this position is being timely, taking notes, and being exceptionally organized.</h5>
          </li>
        </ul>
        <h3>COMMUNITY SERVICE</h3>
        <ul>
          <li>
            <h5>Kappa Sigma Fraternity “Woofs for Warriors” program (8 volunteer hours) 2020, 2021</h5>
          </li>
          <li>
            <h5>Kappa Sigma Fraternity “Kampaign CurE” (8 volunteer hours) 2020</h5>
          </li>
          <li>
            <h5>Fraternity Bible Study Co-Leader (10 volunteer hours) 2021</h5>
          </li>
        </ul>
        </div>

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
      </body>
    </div>
  );
}

export default App;
