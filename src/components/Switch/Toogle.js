import "./toogle.css";

const Toogle = ({ flipped, setFlipped }) => {
  return (
    <div className="d-flex">
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        role="switch"
        name="toggle"
        value="on"
        onClick={() => setFlipped(!flipped)}
      />
      <label for="toggle" className="slot mt-1">
        <span className="slot__label">FRONT</span>
        <span className="slot__label">BACK</span>
      </label>
      <div className="curtain"></div>
    </div>
  );
};

export default Toogle;
