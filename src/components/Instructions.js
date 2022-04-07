import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
function Instructions() {
  return (
    <div className="container">
      <h2 className="instructions">Instructions</h2>
      <div className="flex">
        <div className="instruction-stage">
          <h3 className="card-heading card-heading-underline-blue">Enter two Github users</h3>
          <div className="instruction-card">
            <FontAwesomeIcon
              icon={solid('people-arrows-left-right')}
              size="10x"
              border
              color="#057d90"
            />
          </div>
        </div>
        <div className="instruction-stage">
          <h3 className="card-heading card-heading-underline-brown">Battle</h3>
          <div className="instruction-card">
            <FontAwesomeIcon
              icon={solid('jet-fighter')}
              size="10x"
              border
              transform={{ rotate: -42 }}
              color="#b22222"
            />
          </div>
        </div>
        <div className="instruction-stage">
          <h3 className="card-heading card-heading-underline-gold">See the winner</h3>
          <div className="instruction-card">
            <FontAwesomeIcon
              icon={solid('trophy')}
              size="10x"
              border
              color="gold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Instructions;
