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
      <body>
      </body>
    </div>
  );
}

export default App;
