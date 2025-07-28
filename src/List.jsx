import PropTypes from "prop-types";

function List(props) {
    const itemlist = props.items;
    const category = props.category;

    const listitems = itemlist.map((item) => (
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h2>{category}</h2>
            <ol>{listitems}</ol>
        </>
    );
}

// Add propTypes for better development experience and validation
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    })),
    category: PropTypes.string,
};

List.defaultProps = {
    items: [
        { id: 0, name: "Default Item 1", calories: 100 },
        { id: 1, name: "Default Item 2", calories: 150 },
    ],
    category: "Default Category",
};

export default List;