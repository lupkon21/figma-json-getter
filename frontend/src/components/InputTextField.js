import PropTypes from "prop-types";

const InputTextField = ({ type }) => {
    return (
        <input
            type="text"
            name={type}
            id={type}
            placeholder={
                type == "figmaUserToken" ? "xxxxx-xxxxx-xxxxx" : "xxxx"
            }
            className="Form-input-field"
        />
    );
};

InputTextField.propTypes = {
    type: PropTypes.string,
};

export default InputTextField;
