import "../App.css"
import image1 from "../assets/Posters/iloveimg-converted/1.jpg"
import image2 from "../assets/Posters/iloveimg-converted/2.jpg"
import image3 from "../assets/Posters/iloveimg-converted/3.jpg"
import image4 from "../assets/Posters/iloveimg-converted/4.jpg"
import image5 from "../assets/Posters/iloveimg-converted/5.jpg"
import image6 from "../assets/Posters/iloveimg-converted/6.jpg"
import image7 from "../assets/Posters/iloveimg-converted/7.jpg"
import image8 from "../assets/Posters/iloveimg-converted/8.jpg"
import image9 from "../assets/Posters/iloveimg-converted/9.jpg"
import image10 from "../assets/Posters/iloveimg-converted/10.jpg"

function Page2(){
    return(
        <>
            <div className="netflix-curve"></div>
            <section className="page2">
                <div className="trend-title">
                    <h2>Trending Now</h2>
                </div>

                <div className="scroll-container">
                    <ul>
                        <li>
                            <img src={image1} alt="" />
                            <span>1</span>
                        </li>
                        <li>
                            <img src={image2} alt="" />
                            <span>2</span>
                        </li>
                        <li>
                            <img src={image3} alt="" />
                            <span>3</span>
                        </li>
                        <li>
                            <img src={image4} alt="" />
                            <span>4</span>
                        </li>
                        <li>
                            <img src={image5} alt="" />
                            <span>5</span>
                        </li>
                        <li>
                            <img src={image6} alt="" />
                            <span>6</span>
                        </li>
                        <li>
                            <img src={image7} alt="" />
                            <span>7</span>
                        </li>
                        <li>
                            <img src={image8} alt="" />
                            <span>8</span>
                        </li>
                        <li>
                            <img src={image9} alt="" />
                            <span>9</span>
                        </li>
                        <li>
                            <img src={image10} alt="" />
                            <span>10</span>
                        </li>

                    </ul>
                </div>

                <div className="page2-bottom">
                    <h2>More reasons to join</h2>
                    <div className="other-cards">
                        <div className="card">
                            <h2>Enjoy on your TV</h2>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>

                        <div className="card">
                            <h2>Download your shows to watch offline</h2>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>

                        <div className="card">
                            <h2>Watch everywhere</h2>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>

                        <div className="card">
                            <h2>Create profiles for kids</h2>
                            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page2