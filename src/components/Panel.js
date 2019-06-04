import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Card from './Card'
import Data from './object.json'
import '../seedActualStyle.css';
import HeaderCollection from './HeaderCollection';
class Panel extends Component{     
    render(){
        const ideaList = Data.myIdeas
        const assetList = Data.myAssets

        return(
            <div>
               <Container fluid="true"  >

                <Row >
                    <Col className="panel" sm={4}> 
                        <HeaderCollection></HeaderCollection>
                    </Col>
                </Row>
                 
                
                 <Row > 
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
                    {assetList.map((idea) => {
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