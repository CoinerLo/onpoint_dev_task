import './homeSlide.css';
import { CSSTransition } from 'react-transition-group';

const HomeSlide = ({ setCurrentSlide }) => {
  console.log('HomeSlide');
  return (
    <CSSTransition
      in
      timeout={1000}
      className="transition_page"
      unmountOnExit
    >
      <main className="homeSlide">
        <p className="home_subtitle">Привет,</p>
        <h1 className="home_title">
          Это
          <b> не </b>
          коммерческое задание
          <button
            type="button"
            className="btn home_button"
            onClick={() => setCurrentSlide(1)}
          >
            Что дальше?
          </button>
        </h1>
      </main>
    </CSSTransition>
  );
};

export default HomeSlide;
