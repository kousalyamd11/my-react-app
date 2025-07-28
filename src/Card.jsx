import profilepicture from './assets/download (6).jpg'
function Card() {
    return ( 
        <div className="card">
            <img className="card-image" src={profilepicture} alt="profile picture"></img>
            <h2 className="card-title">Brand Systems</h2>
            <p className="card-text">this is the company named Brandsystems.pvt.ltd</p>
            
        </div>
     );
}

export default Card;