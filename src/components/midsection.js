import first from '../assets/first.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'
import '../styles/midsection.css'
import Chip from'../components/chips'
import Slide from '../components/slider'
 

function midsection(){
    return(
        <>
        <div className='container'>
            <div className='slider'>
            <h1>New This Week</h1> 
            <Slide/>
            </div>
            <div className='wrapper'>
                <div className='media'>
                    <img src={first} alt="" width="532px"/>
                    <div className="first-left">
                    <p>Collection</p>
                    <h4>Most popular around <br /> the world</h4>
                    </div>
                    <button className="btn-first">Show all</button>
                </div>

                <div className='media'>
                    <img src={second} alt="" width="532px" />
                    <div className="second-left">
                    <p>Collection</p>
                    <h4>Great for team <br /> building</h4>
                    </div>
                    <button className="btn-second">Show all</button>
                </div>

                <div className='media'>
                    <img src={third} alt=""  width="535px"/>
                    <div className="third-left">
                    <p>Collection</p>
                    <h4>Fun for the <br /> family</h4>
                    </div>
                    <button className="btn-third">Show all</button>
                </div>
            
            </div>
            <Chip/>

        </div>

        </>


    )
}

export default midsection;