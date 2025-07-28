// import Button from './Button.jsx';
// import Card from './Card.jsx';
// import Food from './Food.jsx';
// import Footer from './Footer.jsx';
// import Header from './Header.jsx'
import List from './List.jsx';
// import Student from './Students.jsx';
// import Usergreeting from './UserGreeting.jsx';


function App() {
    const fruits=[{id:1, name:"apple",calories:95}, 
                  {id:2,name:"date",calories:78}, 
                  {id:3,name:"elderberry",calories:108}, 
                  {id:4,name:"banana",calories:189},
                  {id:5,name:"cherry",calories:90}];

    const vegetables=[{id:6, name:"potato",calories:80}, 
                  {id:7,name:"tomato",calories:78}, 
                  {id:8,name:"cabbage",calories:108}, 
                  {id:9,name:"chilly",calories:189},
                  {id:10,name:"cucumber",calories:90}];
    
    return(
        <>
        {fruits.length >0 ?<List  items={fruits} category="Fruits"/>:null}
        {vegetables.length >0 ?<List  category="Vegetables"/>:null}
        
        </>
    );
}
export default App

//this is tfor alsdjhf