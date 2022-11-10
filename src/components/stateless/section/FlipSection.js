import "./flipsection.css";

const FlipSection = ({ flipped, skillsBackArray, skillsFrontArray }) => {
  return (
    <div className="section-relative">
      <div className="flip-section">
        <div
          className="flip-section-inner"
          style={flipped === true ? { transform: "rotateY(180deg)" } : null}
        >
          <div className="flip-section-front">
            {skillsFrontArray.map((el) => (
              <div key={el}>
                <img
                  src={`./logos/${el}.png`}
                  style={{ width: "7rem" }}
                  alt="xd"
                />
                <h3>{el.charAt(0).toUpperCase() + el.slice(1)}</h3>
              </div>
            ))}
          </div>
          <div className="flip-section-back">
            {skillsBackArray.map((el) => (
              <div key={el}>
                <img
                  src={`./logos/${el}.png`}
                  style={{ width: "7rem" }}
                  alt="xd"
                />
                <h3>{el.charAt(0).toUpperCase() + el.slice(1)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipSection;
