import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Jumbotron, Table } from 'reactstrap';
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
            Hi there! I am a Program Manager at Microsoft and former graduate student researcher. As a PM at Microsoft I am part of the One Engineering System (1ES) team where we work to improve the engineering experience for developers across Microsoft. You can read more about the Microsoft 1ES vision in <a href="https://blogs.msdn.microsoft.com/bharry/2017/02/03/scaling-git-and-some-back-story/">this 2017 blog post by our former CVP</a>.
          </p>
          <p>
            Before Microsoft, I worked at the wonderful <a href="https://thechiselgroup.org/">Computer Human Interaction & Software Engineering Lab (CHISEL)</a> at the University of Victoria as a Research Assistant. During my time at UVic I got to do some cool things, including:</p>
          <ul>
            <li> Building a tagging extension for the reverse engineering <a href="https://www.hex-rays.com/products/ida/"> IDA Pro</a> platform. This was developed with and for malware analysis at the federal Defence Research and Development Canada agency.</li>
            <li> A replication study of the postitive behaviours of successful Stack Overflow users.</li>
            <li> A master's thesis looking at how top YouTubers share programming knowledge and understanding through video.</li>
          </ul>
          <p>
            I'm interested in all things related to improving developer experiences and productivity (in that order). Specifically I love challenges that are driven by human behaviours, and can be supported through thoughtful tool or process design.
          </p>
          <p>
            On this site you can find published papers and my contact information.
          </p>
        </div>

        <div id="Publications">
          <h2>
            <a className="sectionTitle" id="PublicationHeader">Publications</a>
          </h2>
          <Table id="resumeTable">
            <thead>
              <tr>
                <th className="text-center">Citation</th>
                <th className="text-right">PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary">"Code Reviewing in the Trenches: Understanding Challenges and Best Practices"
                  <br />
                    <span className="small text-muted"> MacLeod, Laura; Greiler, Michaela; Storey, Margaret-Anne; Bird, Christian; Czerwonka, Jacek; IEEE Software; 2018</span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="http://cabird.com/pubs/macleod2017codereviewing.pdf">Link</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary"> "Documenting and sharing software knowledge using screencasts"
                  <br />
                    <span className="small text-muted"> MacLeod, Laura; Bergen, Andreas; Storey, Margaret-Anne; Empirical Software Engineering; 2017</span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="http://chisel.cs.uvic.ca/pubs/macleod-ESE2017.pdf" >Link</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary"> "Code, camera, action: how software developers document and share program knowledge using YouTube""
                  <br />
                    <span className="small text-muted"> MacLeod, Laura; Storey, Margaret-Anne; Bergen, Andreas; Proceedings of the 2015 IEEE 23rd International Conference on Program Comprehension; 2015</span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="docs/ICPC_2015_MacLeod_Storey_Bergen.pdf" >Link</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary">"Reputation on Stack Exchange: Tag, You're It!""
                 <br />
                    <span className="small text-muted"> MacLeod, Laura; 28th International Conference on Advanced Information Networking and Applications Workshops; 2014</span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="docs/Reputation_On_Stack_Exchange2014.pdf">Link</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary"> "ICE: Binary analysis that you can see"
                  <br />
                    <span className="small text-muted"> Pucsek, Dean; Baldwin, Jennifer; MacLeod, Laura; Berg, Celina; Coady, Yvonne; Salois, Martin; 2013 IEEE Pacific Rim Conference on Communications, Computers and Signal Processing; 2013</span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="docs/ICE_Binary_Analysis2013.pdf">Link</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p className="pub-title text-primary"> "Parallel Perspectives: Reverse Engineering for Generation Multi-X,""
                  <br />
                    <span className="small text-muted"> Bergen, Andreas; Pucsek, Dean; Baldwin, Jennifer; MacLeod, Laura; Berg, Celina; Salois, Martin; Coady, Yvonne; 2012 Seventh International Conference on P2P, Parallel, Grid, Cloud and Internet Computing; 2012

                     </span>
                  </p>
                </th>
                <td className="text-right">
                  <a href="docs/Parallel_Perspectives2012.pdf">Link</a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div id="Resume">
          <h2>
            <a className="sectionTitle" id="ResumeHeader">Resume</a>
          </h2>
          <div className="text-center">
          <a href="docs/Laura_MacLeod_Resume.pdf"><button type="button" className="btn btn-info btn-lg">Resume PDF </button></a>
        </div>
        </div>

        <div id="Contact">
        <h2>
            <a className="sectionTitle" id="ContactHeader">Contact</a>
          </h2>
          <ul>
            <li> <a href="https://www.linkedin.com/in/lmacleod-dev"> LinkedIn </a></li>
            <li> <a href="https://twitter.com/ThatLauraMac"> Twitter </a></li>
            </ul>


        </div>
      </div>
    );
  }
}

export default App;
