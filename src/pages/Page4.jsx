import "./Page4.css"

export function Page4(){
    return(
        <>
            <section>
                    <div>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="page4-form">
                            <input type="email" placeholder="Email address" />
                            <button>Get Started</button>
                        </div>

                        <footer>
                            <p>Question? Call 000-800-919-1743</p>
                            <div className="page4-footer-section">
                                <a href="#">FAQ</a>
                                <a href="#">Investor Relations</a>
                                <a href="#">Privacy</a>
                                <a href="#">Speed Test</a>
                                <a href="#">Help Centre</a>
                                <a href="#">Jobs</a>
                                <a href="#">Cookie Preferences</a>
                                <a href="#">Legal Notices</a>
                            </div>

                            <div className="page4-translate-button">
                                <select name="translate" id="translate">
                                    <option value="En">English</option>
                                    <option value="Hi">Hindi</option>
                                </select>
                            </div>

                            <div className="page4-signature">
                                <h6>Netflix India</h6>
                                <h6>This page is protected by Google reCAPTCHA to ensure you're not a bot.</h6>
                            </div>
                        </footer>
                    </div>
            </section>
        </>
    )
}