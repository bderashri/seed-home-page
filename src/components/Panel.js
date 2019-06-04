import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Card from './Card'
import Data from './object.json'
import '../seedActualStyle.css';
import seed27 from "../img/seed-27.svg" ;
import seed26 from "../img/seed-26.svg";
import arrow from "../img/Arrow - SEED-20.svg"

/*import HeaderCollection from './HeaderCollection';*/

class Panel extends Component{     

    constructor() {
        super();
        
        this.state = {
          showMenu: false,
          IdeaClicked:false,
          AssetClicked:false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.IdeaClicked = this.IdeaClicked.bind(this);
        this.AssetClicked = this.AssetClicked.bind(this);
        this.CloseAsset = this.CloseAsset.bind(this);
        this.CloseIdea = this.CloseIdea.bind(this);
    }

    IdeaClicked(event){
        event.preventDefault();
        this.setState({ IdeaClicked: true },() => {
            document.addEventListener('click', this.CloseIdea);
          });
    }

    CloseIdea() {
        this.setState({ IdeaClicked: false }, () => {
          document.removeEventListener('click', this.CloseIdea);
        });   
    }

    AssetClicked(event){
        event.preventDefault();
        this.setState({ AssetClicked: true }, () => {
            document.addEventListener('click', this.CloseAsset);
        });
    }

    CloseAsset() {
        this.setState({ AssetClicked: false }, () => {
          document.removeEventListener('click', this.CloseAsset);
        });   
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }
      
    closeMenu() {
            this.setState({ showMenu: false }, () => {
              document.removeEventListener('click', this.closeMenu);
        });   
      }
    
      
    render(){
        
        const ideaList = Data.myIdeas
        const assetList = Data.myAssets

        return(
            <div>
               <Container fluid="true"  >

             { /* <Row >
                    <Col className="panel" sm={4}> 
                        <HeaderCollection></HeaderCollection>
                    </Col>
                </Row>*/}
                 <Row className="row-wrapper">
                     <Col> 
                     <div>
                        <div className="Rectangle-341" onClick={this.IdeaClicked}>
                            <div className="ideasButton">Ideas</div>
                        </div>
                        
                        <div className="Rectangle-311" onClick={this.AssetClicked} > 
                            <div className="assetsButton">Assets </div>
                        </div>
                    </div>      
                    </Col>

                     <Col>
                        <div className="Ellipse-43">
                            <img src={seed27} alt="filter" className="filter"  />
                        </div>
                    </Col>

                    <Col sm={2 }>
                        <div className="Rectangle-232" onClick={this.showMenu} >
                            <img src={seed26} alt="updown arrow"className="seed-26" />
                            <div className="Sort-by">Sort by</div>
                            <img src={arrow} alt="arrow" className="Arrow---SEED-20" />  

                         </div>    
                     </Col>

                    {this.state.showMenu
                    ?(
                        <div className="dropDown" ref={(element) => {this.dropdownMenu = element;}}>
                        <ul >
                            <li >New</li>
                            <li>Relevance</li> 
                            <li>Popularity</li>
                            <li>Stages(High to Low)</li>
                            <li>Stages(Low to High)</li>
                        </ul>
                    </div>
                    )
                    :(
                        null
                    )}

                 </Row>

                    {this.state.IdeaClicked
                    ?(
                        <div>
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
                        </div>
                    ):
                    (null)
                    }
                    
                     
                    {this.state.AssetClicked
                    ?(
                        <div>

                        <Row>
                            <Col className="assetsRow">
                                <div className="My-Assets">My Assets</div>
                            </Col>
                        </Row>
                    
                        <Row className="row-wrapper" >
                            {assetList.map((asset) => {
                                return (
                                <Col sm={4} >
                                <Card data={asset}/>
                                </Col>)})}
                        </Row>
                        </div>
                        ):
                        (null)
                    }

                </Container>
                </div>
                )
     }
}
         
   
export default Panel;