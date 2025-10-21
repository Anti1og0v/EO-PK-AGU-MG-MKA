import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Description from '../components/Description/Description.jsx';

export default function Home({ onScrollRequest, descriptionRef }) {
  return (
    <div>
      <Header />
      <Main onScrollRequest={onScrollRequest} />
      <Description ref={descriptionRef} />
      <Main onScrollRequest={onScrollRequest} />
    </div>
  );
}
