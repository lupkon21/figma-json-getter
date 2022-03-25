import PropTypes from "prop-types";

const Button = ({ type }) => {
    return (
        <input
            type={type}
            name={type}
            value={type.toUpperCase()}
            className={`Form-input-btn Form-input-${type}`}
        />
    );
};

Button.propTypes = {
    type: PropTypes.string,
};

export default Button;
