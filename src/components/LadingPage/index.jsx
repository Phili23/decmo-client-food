import React from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function LandingPage() {

    return (
        <div className="page">
            <div><br /><br /><br /><br /><br />
                <h1 className="ladingp">Foods Recipes</h1>
                <p className="landingp">Welcome !<br/> Find the best recipes according to your preferences or diet, add your <br />favorite recipes and to share them with everyone!</p><br />
            </div>
            <div>
                <Link to="/home">
                    <button className="butt2">Get into</button>
                </Link>
            </div>
        </div>
    )
}    
