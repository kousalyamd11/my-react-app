import PropTypes from "prop-types";
function Usergreeting(props) {
    const welcomemessage = <h2 className="welcome-message">welcome to {props.username}</h2>

    const loginprompt = <h2 className="loginprompt">login to continue</h2>
    return(
        props.isLoggedin ?  welcomemessage :loginprompt                    
    );
    
}

Usergreeting.propTypes ={
    isLoggedin:PropTypes.bool,
    username:PropTypes.string
}

Usergreeting.defaultProps={
    isLoggedin:false,
    username:"Guest"
}


export default Usergreeting;