import PropTypes from 'prop-types'
function Student(props) {
    return ( 
        <div className="student">
            <p className="p">Name:{props.Name}</p>
            <p className="p">Age:{props.age}</p>
            <p className="p">Student:{props.isStudent ? "yes" :"no"}</p>
        </div>
     );
}
Student .propTypes= {
    Name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student .defaultProps={
    Name:"Guest",
    age: 0,
    isStudent: false,
}

export default Student;