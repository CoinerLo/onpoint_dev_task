import './brandSlide.css';

const BrandSlide = () => {
  console.log('HomeSlide');
  return (
    <main className="brandSlide">
      <h1 className="brand_title">Ключевое сообщение</h1>
      <h3 className="brand_subtitle">
        Brend
        <b>xy</b>
      </h3>
      <div className="brand_details">
        <div className="details_full">
          <img src="details_full.jpg" alt="icon" />
          <p>
            Ehicula ipsum a arcu cursus vitae.
            Eu non diam phasellus vestibulum lorem sed risus ultricies
          </p>
        </div>
        <div className="details_mini">
          <div className="details_mini_content">
            <img src="details_mini.jpg" alt="icon" />
            <p>A arcu cursus vitae</p>
          </div>
          <button type="button" className="btn brand_details_btn">Подробнее</button>
        </div>
      </div>
    </main>
  );
};

export default BrandSlide;
