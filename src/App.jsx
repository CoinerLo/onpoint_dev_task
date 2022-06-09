import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { route, bg } from './constants';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const Slide = route[currentSlide];

  return (
    <div className={`App ${bg[currentSlide]}`}>
      <Header setCurrentSlide={setCurrentSlide} />
      <Slide setCurrentSlide={setCurrentSlide} />
      <Footer />
    </div>
  );
};

export default App;
