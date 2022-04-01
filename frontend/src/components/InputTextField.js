import PropTypes from "prop-types";

const InputTextField = ({ type, label }) => {
    return (
        <>
            <label className="Form-input-field-label" for={type}>
                {label}
            </label>
            <input
                type="text"
                name={type}
                id={type}
                placeholder={type === "figmaUserToken" ? "xxxxx-xxxxx-xxxxx" : "xxxx"}
                className="Form-input-field"
                required
            />
            <br></br>
        </>
    );
};

InputTextField.propTypes = {
    type: PropTypes.string,
};

export default InputTextField;
