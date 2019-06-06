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
          NameDesc:false,
          NameAsc:false,
          DateRecentF:false,
          DateOldestF:false,
          ideaList: [],
          assetList: [],
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.IdeaClicked = this.IdeaClicked.bind(this);
        this.AssetClicked = this.AssetClicked.bind(this);
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

   sortDate(a,b){
       var date1 = new Date(a.date);
      // alert(date1)
       var date2 = new Date(b.date);
       return ((date1 > date2) ? -1 : ((date1 < date2) ? 1 : 0))
   }

   rsortDate(a,b){
        var date1 = new Date(a.date);
        var date2 = new Date(b.date);
        return ((date1 < date2) ? -1 : ((date1 > date2) ? 1 : 0))
   }

   sortArray(){
        var newList =[]
       if(this.IdeaClicked){
            newList = this.ideaArray;
            //newList.sort(this.sortMainline)
            this.setState({
                ideaList : newList
            });
       }

       if(this.AssetClicked){
            newList = this.assetArray;
           // newList.sort(this.sortMainline)
            this.setState({
                assetList : newList
            });
       }
       
       if(this.state.NameAsc){
            newList = this.assetArray;
            newList.sort(this.sortMainline)
            this.setState({
                assetList : newList
            });

            newList = this.ideaArray;
            newList.sort(this.sortMainline)
            this.setState({
                ideaList : newList
            });
       }

       if(this.state.NameDesc){
            newList = this.assetArray;
            newList.sort(this.rsortMainline)
            this.setState({
                assetList : newList
            });

            newList = this.ideaArray;
            newList.sort(this.rsortMainline)
            this.setState({
                ideaList : newList
            });
           
       }

       if(this.state.DateOldestF){
        newList = this.assetArray;
        newList.sort(this.sortDate)
        this.setState({
            assetList : newList
        });

        newList = this.ideaArray;
        newList.sort(this.sortDate)
        this.setState({
            ideaList : newList
        });
        
    }
        
        if(this.state.DateRecentF){

            newList = this.assetArray;
            newList.sort(this.rsortDate)
            this.setState({
                assetList : newList
            });
    
            newList = this.ideaArray;
            newList.sort(this.rsortDate)
            this.setState({
                ideaList : newList
            
        });
    }

    
   }

    IdeaClicked(event){
        event.preventDefault();
        this.setState({ IdeaClick: true })
        this.setState({ AssetClick: false })
        this.sortArray(); 
    }

 
    AssetClicked(event){
        event.preventDefault();
        this.setState({ AssetClick: true })
        this.setState({ IdeaClick: false })
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
    
      
    NameDescending(event){
        event.preventDefault()
        this.setState({NameDesc:true})
        this.setState({NameAsc:false})
        this.sortArray();

    }
      
    NameAscending(event){
        event.preventDefault()
        this.setState({NameAsc:true})
        this.setState({NameDesc:false})
        this.sortArray();
    }

    DateRecentFirst(event){
        event.preventDefault()
        this.setState({DateRecentF:true});
        this.setState({DateOldestF:false});
        this.sortArray();
    }

    DateOldestFirst(event){
        event.preventDefault()
        this.setState({DateOldestF:true});
        this.setState({DateRecentF:false});
        this.sortArray();
    }

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
                            <li onClick={this.DateRecentFirst.bind(this)}>Date(Latest->Oldest)</li> 
                            <li onClick={this.DateOldestFirst.bind(this)}>Date(Oldest->Latest)</li>
                            <li onClick={this.NameDescending.bind(this)}>Name(A->Z)</li>
                            <li onClick={this.NameAscending.bind(this)}>Name(Z->A)</li>
                            <li> Progress(Ascedning)</li>
                            <li> Progress(Descending</li>
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