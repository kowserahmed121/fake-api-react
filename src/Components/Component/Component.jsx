import "./component.css";
const Component = ({ phone }) => {
  const { brand, model, price, color } = phone;
  return (
    <div className="box">
      <h2>brand name : {brand}</h2>
      <p>model {model}</p>
      <div className="flex">
        <p>price : {price}</p>
        <p>color : {color}</p>
      </div>
    </div>
  );
};

export default Component;
