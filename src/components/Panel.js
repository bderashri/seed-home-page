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
    
     ideaArray= Data.myIdeas;
     assetArray= Data.myAssets;

    constructor(props) {
        super(props);
        this.state = {
          showMenu: false,
          IdeaClick:false,
          AssetClick:false,
          StagesHighClick:false,
          StagesLowClick:false,
          ideaList: [],
          assetList: [],
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.IdeaClicked = this.IdeaClicked.bind(this);
        this.AssetClicked = this.AssetClicked.bind(this);
        //this.CloseStagesHighClicked = this.CloseStagesHighClicked(this);
        //this.CloseStagesLowClicked = this.CloseStagesLowClicked(this);
        //this.sortArrayOfObjects= this.sortArrayOfObjects.bind(this);
        this.sortMainline = this.sortMainline.bind(this);
        this.sortIdea = this.sortIdea.bind(this);
        this.sortAsset = this.sortAsset.bind(this);
        this.sortHighAsset = this.sortHighAsset.bind(this);
    
       this.sortArray = this.sortArray.bind(this);
    }


    
   sortMainline(a,b){
    var x = a.mainline.toLowerCase();
    var y = b.mainline.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
   }

   rsortMainline(a,b){
    var x = a.mainline.toLowerCase();
    var y = b.mainline.toLowerCase();
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
   }

   sortArray(){
       if(this.IdeaClicked){
        //alert("inside idea sort")
        var newList = this.ideaArray;
        newList.sort(this.sortMainline)
        this.setState({
            ideaList : newList
        });
       }

       if(this.AssetClicked){
       // alert("inside asset sort")
        var newList = this.assetArray;
        newList.sort(this.sortMainline)
        this.setState({
            assetList : newList
        });
       }
       
       if(this.state.StagesLowClick){
            var newList = this.state.assetList;
        newList.sort(this.sortMainline)
        this.setState({
            assetList : newList
        });

        newList = this.state.ideaList;
        newList.sort(this.sortMainline)
        this.setState({
            ideaList : newList
        });
       }
       if(this.state.StagesHighClick){
            var newList = this.state.assetList;
            newList.sort(this.rsortMainline)
            this.setState({
                assetList : newList
            });

            newList = this.state.ideaList;
            newList.sort(this.rsortMainline)
            this.setState({
                ideaList : newList
            });
       }

    
   }
    sortIdea()  {
           alert("inside idea sort")
            var newList = this.ideaArray;
            newList.sort(this.sortMainline)
            this.setState({
                ideaList : newList
            });
        }

    sortAsset(){
       // alert("inside asset sort")
        var newList = this.assetArray;
        newList.sort(this.sortMainline)
        this.setState({
            assetList : newList
        });
    }
            
    sortHighAsset(){
       // alert("set state done")
        var newList = this.state.assetList;
        newList.sort(this.rsortMainline)
        this.setState({
            assetList : newList
        });

        newList = this.state.ideaList;
        newList.sort(this.rsortMainline)
        this.setState({
            ideaList : newList
        });
    }

    sortLowAsset(){
      //  alert("set state done")
        var newList = this.state.assetList;
        newList.sort(this.sortMainline)
        this.setState({
            assetList : newList
        });

        newList = this.state.ideaList;
        newList.sort(this.sortMainline)
        this.setState({
            ideaList : newList
        });
    }


    IdeaClicked(event){
        event.preventDefault();
        this.setState({ IdeaClick: true })/*,() => {
            document.addEventListener('click', this.CloseIdea);
          });*/
        this.setState({ AssetClick: false })/*, () => {
            document.removeEventListener('click', this.CloseAsset);
          }); */
        this.sortArray();
        
    }

 
    AssetClicked(event){
        event.preventDefault();
        this.setState({ AssetClick: true })/*, () => {
            document.addEventListener('click', this.CloseAsset);
        });*/
        this.setState({ IdeaClick: false })/*, () => {
            document.removeEventListener('click', this.CloseIdea);
          });  */
        this.sortArray();
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
    
      
    StagesHighClicked(event){
        //event.preventDefault();
        this.setState({StagesHighClick:true})
        this.setState({StagesLowClick:false})
       /*this.setState({StagesLowClick:false})/*,() => {
            document.addEventListener('click', this.CloseStagesHighClicked);
         });*/
         this.sortArray();

    }
      
    StagesLowClicked(){
        this.setState({StagesLowClick:true})
        this.setState({StagesHighClick:false})
        this.sortArray();
    }
/*

    CloseStagesHighClicked(){
        
         this.setState({StagesHighClicked:false}, ()=> {
            document.removeEventListener('click', this.CloseStagesHighClicked)
        });
        
        
    }

    CloseStagesLowClicked(){
        this.setState({StagesLowClicked:false}, ()=> {
            document.removeEventListener('click', this.CloseStagesLowClicked)
        });
    }*/
       

    render(){
        
        
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
                            <li onClick={this.StagesLowClicked.bind(this)}> Stages(High to Low)</li>
                            <li onClick={this.StagesHighClicked.bind(this)}>Stages(Low to High)</li>
                        </ul>
                    </div>
                    )
                    :(
                        null
                    )}

                 </Row>

                    {this.state.IdeaClick
                    ?(
                        <div>
                        <Row > 
                            <Col className="ideasRow">
                                <div className="My-Ideas">My Ideas</div>
                            </Col>
                        </Row>
                        
                        <Row className="row-wrapper" >
                            {this.state.ideaList.map((idea) => {
                                return (
                                    <Col sm={4} >
                                    <Card data={idea}/>
                                    </Col>)})}
                        </Row>
                        </div>
                    ):
                    (null)
                    }
                    
                     
                    {this.state.AssetClick
                    ?(
                        <div>

                        <Row>
                            <Col className="assetsRow">
                                <div className="My-Assets">My Assets</div>
                            </Col>
                        </Row>
                    
                        <Row className="row-wrapper" >
                            {this.state.assetList.map((asset) => {
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