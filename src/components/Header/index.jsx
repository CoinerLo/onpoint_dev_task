import './header.css';

const Header = ({ setCurrentSlide }) => (
  <header className="header">
    <button
      type="button"
      className="header_logoHome"
      onClick={() => setCurrentSlide(0)}
    >
      <img src="home.png" alt="Logo home page" />
    </button>
    <p>Project</p>
  </header>
);

export default Header;
