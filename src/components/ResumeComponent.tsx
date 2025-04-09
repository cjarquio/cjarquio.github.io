import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
      <div className="container mt-3 resume">
        {/*Contact Information*/}
        <div className="row">
          <div className="col-12 text-center">
            <h5>Charles Jarquio</h5>
          </div>
          <div className="col-12 text-center">
            <p className="text-center">
              Tacoma, WA 98407 <br />
              (808) 346-6221 <br />
              cjarquio@gmail.com <br />
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/charles-jarquio-116210104/">
                https://www.linkedin.com/in/charles-jarquio-116210104/
              </a>{' '}
              <br />
              GitHub:{' '}
              <a href="https://github.com/cjarquio">
                https://github.com/cjarquio
              </a>
            </p>
          </div>
        </div>
        {/*Education*/}
        <div className="row">
          <div className="col-12">
            <h4>EDUCATION</h4>
            <hr className="resumeLine" />
          </div>

          <div className="col-8 col-md-4">
            <p>
              <strong>University of Hawaii at Manoa</strong>
              <br />
              Bachelor of Science Computer Engineering
            </p>
          </div>
          <div className="col-1 col-md-5"></div>
          <div className="col-3 text-right">
            <p>
              May 2016 <br />
              Honolulu, HI
            </p>
          </div>

          <div className="col-7 col-md-4">
            <p>
              <strong>Nucamp Coding Bootcamp</strong> <br />
              Full Stack Web Development
            </p>
          </div>
          <div className="col-1 col-md-5"></div>
          <div className="col-4 col-md-3 text-right">
            <p>
              October 2018 - Present <br />
              Tacoma, WA
            </p>
          </div>
        </div>
        {/*Experience*/}
        <div className="row">
          <div className="col-12">
            <h4>EXPERIENCE</h4>
            <hr className="resumeLine" />
          </div>

          <div className="col-8 col-md-7">
            <p>
              <strong>Build Engineer, Microsoft (through Pactera)</strong>
              <br />
            </p>
            <ul style={{ marginTop: -20 }}>
              <li>Triaged build breaks</li>
              <li>
                Investigated if the problem is related to code, tooling, or
                build environment
              </li>
              <li>Applied code fixes with permission from developer</li>
            </ul>
          </div>
          <div className="col-1 col-md-2"></div>
          <div className="col-3 text-right">
            <p>Jan 2018 - June 2018</p>
          </div>

          <div className="col-8 col-md-5">
            <p>
              <strong>Help Desk Technician, Pacxa (through TekSystems)</strong>
              <br />
            </p>
            <ul style={{ marginTop: -20 }}>
              <li>Monitored and responded to client requests</li>
              <li>Investigated client's computer systems and server issues</li>
              <li>Acted as first point of contact for clients</li>
              <li>Provided excellent customer service</li>
            </ul>
          </div>
          <div className="col-1 col-md-4"></div>
          <div className="col-3 text-right">
            <p>Aug 2016 - May 2017</p>
          </div>
        </div>
        {/*Projects*/}
        <div className="row">
          <div className="col-12">
            <h4>PROJECTS</h4>
            <hr className="resumeLine" />
          </div>

          <div className="col-12">
            <p>
              <strong>ConFusion Website</strong>
              <br />
              Description: Mock restaurant website for the purpose of learning
              web/front-end development
            </p>
            <ul style={{ marginTop: -20, marginBottom: -5 }}>
              <li>
                Created site as a Single Page Application using React library
              </li>
              <li>Added site navigation, forms, and media</li>
              <li>Stylized site using SASS</li>
            </ul>
            <p>
              Tools: Visual Studio, HTML, CSS/SASS, Bootstrap, jQuery,
              JavaScript, React/Redux
            </p>
          </div>

          <div className="col-12">
            <p>
              <strong>Kizel Security Website</strong>
              <br />
              Description: Worked as a three-man team to recreate and redesign
              the Kizel Security website using Bootstrap
            </p>
            <ul style={{ marginTop: -20, marginBottom: -5 }}>
              <li>Designed and created header</li>
              <li>Added information section</li>
            </ul>
            <p>Tools: Visual Studio, HTML/CSS, Bootstrap, jQuery, JavaScript</p>
          </div>
        </div>
        {/*Skills*/}
        <div className="row">
          <div className="col-12">
            <h4>SKILLS</h4>
            <hr className="resumeLine" />
          </div>
          <div className="col-2">
            <ul>
              <li>
                <strong>Languages</strong>
              </li>
              <li>
                <strong>Libraries</strong>
              </li>
              <li>
                <strong>Tools</strong>
              </li>
            </ul>
          </div>
          <div className="col-2 col-md-1"></div>
          <div className="col-8">
            <p>
              JavaScript, HTML, CSS/SASS <br />
              Bootstrap, React/Redux, jQuery <br />
              Visual Studio, Git, GitHub, Grunt, Yarn
            </p>
          </div>
        </div>
      </div>
      <div className="container d-none d-lg-block homeText">
        <Link to="../assets/resume/CharlesJarquioResume.pdf" target="_blank">
          <Button className="m-3">PDF Version</Button>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
