import './Main.css'
import logo from '../../assets/image-victor.jpg';
function Main (){
    return(
        <div id='card'>
            <div id='topCard'></div>
            <div id='midleCard'> 
                <img id='photo' src={logo}/>
                <label>Victor Crest 26</label>
                <p>London</p>
            </div>
            <hr></hr>
            <diV id='bottomdiv'>
                
                <div className='num'>
                     <label>80K</label>
                     <p>Followers</p>
                </div>
                <div className='num'>
                <label>803K</label>
                <p>Likes</p>
                </div>
                <div className='num'>
                <label>104K</label>
                <p>Photos</p>
                </div>
            </diV>
        </div>
    )
}
export default Main