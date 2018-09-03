import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Jumbotron } from 'reactstrap';
import './App.css';
import AppNavbar from './AppNavbar';
import './bootstrap.yeti.css';
import * as MarkdownContent from './markdown_content';

class App extends React.Component {

  private about = MarkdownContent.AboutContent;
  private publications = MarkdownContent.PublicationsContent;
  private resume = MarkdownContent.ResumeContent;

  public render() {
    return (
      <div className="App">
        <Jumbotron color="secondary" className="App-header">
          <AppNavbar />
          <img src="profile_round.png" className="img-profile" alt="profile picture" />
          <h1>Laura MacLeod</h1>
          <p className="text-muted">Program Manager</p>
        </Jumbotron>

        <div id="About">
          <ReactMarkdown source={this.about} />
        </div>
        <div id="Publications">
          <ReactMarkdown
            source={this.publications}
            className="table-hover"
          />
        </div>
        <div id="Resume">
          <ReactMarkdown source={this.resume} />
        </div>
      </div>
    );
  }
}

export default App;
