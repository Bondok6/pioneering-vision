const ProgramCard = ({ img, title, description }) => (
  <li className="program__card">
    <div className="program__card__img">
      <img src={img} alt="program" />
    </div>
    <div className="program__card__content">
      <h3 className="heading-3">{title}</h3>
      <p className="program__card__description">{description}</p>
    </div>
  </li>
);

export default ProgramCard;
