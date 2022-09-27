import "./Card.styles.scss";

const Card = ({ option }) => {
  const { imageUrl, title } = option;
  return (
    <div className="card-item">
      <div className="card-body">
        <div>{imageUrl}</div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
