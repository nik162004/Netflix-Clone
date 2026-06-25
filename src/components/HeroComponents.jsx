import '../App.css'

export function Center(){
    return(
        <>
            <div className="centerStyle">
                <h1>Unlimited movies,<br/>shows, and more</h1>
                <h4>Starts at ₹149. Cancel at any time.</h4>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="mainDoor">
                    <input type="email" placeholder='Email address'/>
                    <button>Get Started</button>
                </div>
            </div>
        </>
    )
}