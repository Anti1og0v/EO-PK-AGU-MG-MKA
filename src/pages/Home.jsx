import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Description from '../components/Description/Description.jsx';
import Process from '../components/Process/Process.jsx';
import ApplicationSubmission from '../components/ApplicationSubmission/ApplicationSubmission.jsx';
import './Home.css';

export default function Home({ onScrollRequest, descriptionRef }) {
  return (
    <div>
      <Header />
      <Main onScrollRequest={onScrollRequest} />
      <Description ref={descriptionRef} />
      <div className="lamp-section-wrapper" style={{position: 'relative'}}>
        <Process />
        <div className="process__lamps-wrapper">
          <div className="process__lamps">
            <div className="process__lamp process__lamp--left" />
            <div className="process__lamp process__lamp--right" />
          </div>
        </div>
        <ApplicationSubmission />
      </div>

    </div>
  );
}
