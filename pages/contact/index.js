const Contact = () => (
  <section className=" contact">
    <div className="contact__content">
      <div className="contact__content__item">
        <img src="/imgs/contact/email.svg" alt="" />
        <div>
          <h3 className="heading-4">البريد الالكتروني</h3>
          <p>info@evission.org</p>
        </div>
      </div>

      <div className="contact__content__item">
        <img src="/imgs/contact/phone.svg" alt="" />
        <div>
          <h3 className="heading-4">رقم الجوال</h3>
          <p>966544223324</p>
        </div>
      </div>

      <div className="contact__content__item">
        <img src="/imgs/contact/location.svg" alt="" />
        <div>
          <h3 className="heading-4">العنوان</h3>
          <p>المملكة العربية السعودية -الرياض -حي الملقا</p>
        </div>
      </div>
    </div>

    <div className="contact__img">
      <img src="/imgs/contact/contact.svg" alt="contact" />
    </div>
  </section>
);

export default Contact;
