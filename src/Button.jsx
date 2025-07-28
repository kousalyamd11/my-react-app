
function Button() {

    const style={
        backgroundColor: "hsla(208, 71%, 24%, 1.00)",
        color: "white",
        padding: "10px 20px",
        border: "10px",
        borderradius: "5px",
        cursor: "pointer",
    }
        
    return ( 
        <button style={style}>click me</button>
     );
}

export default Button;