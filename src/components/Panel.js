import React, {Component} from 'react';
import Card from './Card'
import Data from './object.json'
import '../seedActualStyle.css';
import logo from '../img/Rectangle4.png';
import seed14 from '../img/SEED-14.png';
import seed15 from "../img/SEED-15.png";
import questionmark24 from "../img/question mark-24.png";
import seed27 from "../img/seed-27.png" ;
import seed26 from "../img/seed-26.png";
import arrow from "../img/Arrow - SEED-20.png"
class Panel extends Component{

    
    render(){
        const ideaList = Data.myIdeas
        const assetList = Data.myAssets
        
        return(
            <div>
                
                <img src={logo}  className="seedLogo"></img>
                
                <div className="Ellipse-1"></div>
                <img src={seed14}  className="SEED-14"></img>
                
                <div className="Ellipse-2"></div>
                <img src={seed15} className="SEED-15"></img>

                
                <div className="Ellipse-5"></div>
                <div className="JD">JD</div>

                <div className="Hi-John-Doe">Hi, John Doe!</div>

                

                <div className="Ellipse-7"></div>
                <img src={questionmark24} className="question-mark-24"></img>
                
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets">Business Technology Analyst </div>
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets-text-style-1" >16 Ideas. 3 Assets.</div>

                <div className="My-Ideas">My Ideas</div>

                <div className="Ellipse-43"></div>
                <img src={seed27} className="filter"></img>

                <div className="Rectangle-232"> </div>
                <img src={seed26} className="seed-26"></img>
                <div className="Sort-by">Sort by</div>
                <img src={arrow} className="Arrow---SEED-20"></img>

               
                <div className="panel1">
                    { ideaList.map((idea) => {
                        return <Card comment={idea.comment} date={idea.date} mainline={idea.mainline} category={idea.category}/>

                    })}
                </div>
                
                <div className="My-Assets">My Assets</div>

                <div className="panel2">
                    { assetList.map((asset) => {
                        return <Card comment={asset.comment} date={asset.date} mainline={asset.mainline} category={asset.category}/>

                    })}
                </div>
                
                
            </div>
        )
    }
}
export default Panel;