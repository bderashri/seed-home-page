import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import Card from './Card'
import Data from './object.json'
import '../seedActualStyle.css';
import HeaderCollection from './HeaderCollection';
import logo from '../img/Rectangle4.png';
import seed14 from '../img/SEED-14.png';
import seed15 from "../img/SEED-15.svg";
import questionmark24 from "../img/question mark-24.svg";
import seed27 from "../img/seed-27.svg" ;
import seed26 from "../img/seed-26.svg";
import arrow from "../img/Arrow - SEED-20.svg"

class Panel extends Component{

    render(){
        const ideaList = Data.myIdeas
        const assetList = Data.myAssets
        
        return(
            <div>
               <Container fluid="true"  >

                <Row>
                    <Col className="panel" sm={4} lg={true}> 
                        <HeaderCollection></HeaderCollection>
                    </Col>
                </Row>
                 
                 <Row> 
                    <Col className="ideasRow">
                        <div className="My-Ideas">My Ideas</div>
                    </Col>
                </Row>
                <Row className="row-wrapper" >
                    {ideaList.map((idea) => {
                        return (
                            <Col sm={4} >
                            <Card data={idea}/>
                            </Col>)})}
                </Row>
                    
                <Row>
                    <Col className="assetsRow">
                        <div className="My-Assets">My Assets</div>
                    </Col>
                </Row>
                
                <Row className="row-wrapper" >
                    {ideaList.map((idea) => {
                        return (
                        <Col sm={4} >
                        <Card data={idea}/>
                        </Col>)})}
                </Row>
                
                </Container>
                


                </div>
                )
     }
}
         
   
export default Panel;