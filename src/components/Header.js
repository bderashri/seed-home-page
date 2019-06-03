import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import Card from './Card'
import Data from './object.json'
import '../seedActualStyle.css';
import logo from '../img/Rectangle4.png';
import seed14 from '../img/SEED-14.png';
import seed15 from "../img/SEED-15.svg";
import questionmark24 from "../img/question mark-24.svg";
import seed27 from "../img/seed-27.svg" ;
import seed26 from "../img/seed-26.svg";
import arrow from "../img/Arrow - SEED-20.svg"


class Header extends Component{

    render(){
        return(
            <div >
                
                <img src={logo}  className="seedLogo"></img>
                
                <div className="Ellipse-1"></div>
                <img src={seed14}  className="SEED-14"></img>
                
                <div className="Ellipse-2"></div>
                <img src={seed15} className="SEED-15"/>

                
                
                <div className="Ellipse-5"></div>
                <div className="JD">JD</div>

                <div className="Hi-John-Doe">Hi, John Doe!</div>

                

                <div className="Ellipse-7"></div>
                <img src={questionmark24} className="question-mark-24"></img>
                
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets">Business Technology Analyst </div>
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets-text-style-1" >16 Ideas. 3 Assets.</div>

                
                <div className="Ellipse-43"></div>
                <img src={seed27} className="filter" />

                <div className="Rectangle-232"> </div>
                <img src={seed26} className="seed-26" />
                <div className="Sort-by">Sort by</div>
                <img src={arrow} className="Arrow---SEED-20" />             
                
                
                
            </div>
        )
    }
}
export default Header;