const About = () => (
  <>
    <section className="section about">
      <h2 className="heading-2">طريقك نحو الريادة</h2>
      <div className="about__video-box">
        <video src="video/Intro.mp4" autoPlay muted loop />
      </div>
      <p className="about__text">
        أن تكون جمعية رؤية الريادة عضوا قياديا في تطوير منظومة ريادة الاعمال
        وتعزيز الابداع والابتكار وفق متطلبات التنمية.
      </p>
    </section>

    <section className="section">
      <h2 className="heading-2">
        قيم <span>الجمعية</span>
      </h2>
      <div className="values">
        <img src="/imgs/second-section.PNG" alt="values" />
      </div>
    </section>

    <section className="section">
      <h2 className="heading-2">
        أهداف <span>الجمعية</span>
      </h2>
      <div className="goals">
        <img src="/imgs/third-section.PNG" alt="goals" />
      </div>
    </section>

    <section className="section ambition">
      <h2 className="heading-2">
        نطمح بأن نكون في <span>2026</span>
      </h2>
      <ul className="ambition__list">
        <li className="ambition__item">
          <img src="/imgs/workshope.png" alt="" />
          <h4 className="heading-4">حققنا 30 ورشة عمل</h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/company.svg" alt="" />
          <h4 className="heading-4">ساهمنا في تطوير 10 شركات </h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/idea.svg" alt="" />
          <h4 className="heading-4">احتضنا 20 فكرة ريادية</h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/research.svg" alt="" />
          <h4 className="heading-4">قدمنا 3 بحوث علمية </h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/volunteer.svg" alt="" />
          <h4 className="heading-4">خلقنا 30 فرصة تطوعية </h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/effective.svg" alt="" />
          <h4 className="heading-4">15 شراكة مجتمعيه فاعله </h4>
        </li>
        <li className="ambition__item">
          <img src="/imgs/beneficiary.svg" alt="" />
          <h4 className="heading-4">30 الف مستفيد من برامجنا </h4>
        </li>
      </ul>
    </section>

    <section className="section partners">
      <h2 className="heading-2">شركائنا</h2>
      <ul className="partners__container">
        <li className="partner">
          <img src="/imgs/partener_3.svg" alt="partner" />
        </li>
        <li className="partner">
          <img src="/imgs/partener_2.svg" alt="partner" />
        </li>
        <li className="partner">
          <img src="/imgs/partener_1.svg" alt="partner" />
        </li>
      </ul>
    </section>
  </>
);

export default About;
