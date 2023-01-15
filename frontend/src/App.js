
import MapWrapper from './components/LiveMap';
import logo from './images/logo.png';
import './App.css';
import earth from './images/earth.png';
import venus from './images/venus.png';
import neptune from './images/neptune.png';
import mars from './images/mars.png';
import drawingPath from './images/drawingPath.png';
import TodoApp from './TodoApp';

function App() {
  
  return (
    <div className = "App">
      <div className = "firstPage">
        <div className = "transparentCover">
          <div className = "navbar">
              <div className = "logoSection">
                <img className = "logo" src={logo}/>
                <h3 className = "title">CosmicCompass</h3>
              </div>
              <div className="signSection">
                <h3 className = "sign" id="login">log in</h3>
                <h3 className = "sign" id="signup">sign up</h3>
              </div>
          </div>
          <div className = "maincont">
            <div className = "line"></div>
            <div className = "c">
              <h3 className = "maintext">We make space travel possible...</h3>
              <h3 className = "conttext">Using our state of the art budgeting tools you can plan and visualize your trips as you explore the intergalactic universe.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className = "secondPage">
        <div className = "transparentCover2">
            <img className = "pathImage" src = {drawingPath}></img>
            {/* <div className = "pathBody">
              <div className = "line2"></div>
              <div className = "planetSection">
                <div className = "inner">
                  <h3 className = "pathTitle"><b>Pin a Planet</b></h3>
                  <img src = {earth}></img>
                </div>
                <h3 className = "pathDesc">Track your progress and visualize your goals.</h3>
              </div>

              <div className = "planetSection">
                <h3 className = "pathDesc">Simply categorize your needs and budget accordingly.</h3>
                <div className = "inner">
                  <img src = {venus}></img>
                  <h3 className = "pathTitle"><b>Simplify your Budget</b></h3>
                </div>
              </div>

              <div className = "planetSection">
                <div className = "inner">
                  <h3 className = "pathTitle"><b>Create a Checklist</b></h3>
                  <img src = {neptune}></img>
                </div>
                <h3 className = "pathDesc">Free your mind by using our checklist tool to write down and prioritize your tasks.</h3>
              </div>

              <div className = "planetSection">
                <h3 className = "pathDesc">Get closer to meeting your traveling goals. <b>Sign up</b> today to maintain access to your trip planning.</h3>
                <div className = "inner">
                  <img src = {mars}></img>
                  <h3 className = "pathTitle"><b>Save your Progress</b></h3>
                </div>
              </div>
            </div> */}
        </div>
      </div>

      <div className = "thirdPage">
        <TodoApp></TodoApp>
      </div>
    </div>

  );
}

export default App;
