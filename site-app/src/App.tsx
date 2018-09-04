import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import AppNavbar from './AppNavbar';
import './bootstrap.yeti.css';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Jumbotron color="secondary" className="App-header">
          <AppNavbar />
          <img src="profile_round.png" className="img-profile" alt="profile picture" />
          <h1>Laura MacLeod</h1>
          <div className="text-muted">Program Manager</div>
        </Jumbotron>
        <div id="About">
          <h2>
            <a className="sectionTitle" id="AboutHeader">About</a>
          </h2>
          <p>
            Hi there! I am a Program Manager at Microsoft and former graduate student researcher. As a PM at Microsoft I am part of the One Engineering System (1ES) team. Our team is responsible for improving the engineering experience for developers across Microsoft. You can read more about the Microsoft 1ES vision in <a href="https://blogs.msdn.microsoft.com/bharry/2017/02/03/scaling-git-and-some-back-story/">this 2017 blog post</a>. 
          </p>
          <p>
            I previously was a Research Assistant at the <a href="https://thechiselgroup.org/">Computer Human Interaction & Software Engineering Lab (CHISEL)</a> at the University of Victoria while I completed my master's degree in computer science. 
           </p>
          <p>
            I am interested in user research, online communities, and helping software developers be more productive.
          </p>
          <p>  
            Here you can find published papers and my contact information.
          </p>
        </div>
        <div id="Publications"/>

        <div id="Resume">
          <p>Foo</p>
        </div>
      </div>
    );
  }
}

export default App;
