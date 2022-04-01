import PropTypes from "prop-types";
import ErrorIcon from "../graphics/error.svg";

const RequestStatus = ({ errorMessage }) => {
    return (
        <div className="Form-request-status">
            <img src={ErrorIcon} alt="error" />
            <span>{errorMessage}</span>
        </div>
    );
};

RequestStatus.propTypes = {
    errorMessage: PropTypes.string,
};

export default RequestStatus;
