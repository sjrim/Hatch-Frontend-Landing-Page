import Options from "../Card/Card";
import "./CardContainer.scss";

const CardContainer = ({ options }) => {
  return (
    <section className="cards-container">
      {options.map((option) => (
        <Options key={option.id} option={option} />
      ))}
    </section>
  );
};

export default CardContainer;
