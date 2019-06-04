import React, {Component} from 'react';
import '../seedActualStyle.css';
/*
import logo from '../img/Rectangle4.png';
import seed14 from '../img/SEED-14.png';
import seed15 from "../img/SEED-15.svg";
import questionmark24 from "../img/question mark-24.svg";
*/
import seed27 from "../img/seed-27.svg" ;
import seed26 from "../img/seed-26.svg";
import arrow from "../img/Arrow - SEED-20.svg"

class HeaderCollection extends Component{


    constructor() {
        super();
        
        this.state = {
          showMenu: false,
          showFilter:false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.showFilter = this.showFilter.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
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
    
      showFilter(event){
        event.preventDefault();
        this.setState({showFilter:true}, () => {
          document.addEventListener('click', this.closeFilter);
        });
      }

      closeFilter(){
        this.setState({showFilter:false}, () => {
          document.removeEventListener('click', this.closeFilter);
        })
      }
    render(){
        return(
            <div >
            
               {/* <div className="headerCollection">
                <img src={logo} alt="seed logo"  className="seedLogo"/>
                <div className="Ellipse-1"></div>
                <img src={seed14}  alt="symbol" className="SEED-14"/>                
                <div className="Ellipse-2"></div>
                <img src={seed15} alt="symbol" className="SEED-15"/>

                
                <div className="Ellipse-5"></div>
                <div className="JD">JD</div>

                <div className="Hi-John-Doe">Hi, John Doe!</div>
                
                <div className="Ellipse-7"></div>
                <img src={questionmark24} alt="symbol" className="question-mark-24"></img>
                
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets">Business Technology Analyst </div>
                <div className="Business-Technology-Analyst-16-Ideas-3-Assets-text-style-1" >16 Ideas. 3 Assets.</div>
                
              */}
                <div className="Rectangle-341"><div className="assetsButton">Assets</div></div>   
                <div className="Rectangle-311" > <div className="ideasButton">Ideas</div></div>     
                
                {this.state.showFilter
                ?(
                    
                    <div className="dropDownFilter" ref={(element) => {this.dropdownMenu = element;}}>
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

                <div className="Ellipse-43"></div>
                <img src={seed27} alt="filter" className="filter" onClick={this.showFilter} />

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
                <div className="Rectangle-232" onClick={this.showMenu} > </div>
                <img src={seed26} alt="updown arrow"className="seed-26" />
               
               <div className="Sort-by">Sort by</div>
                <img src={arrow} alt="arrow" className="Arrow---SEED-20" />  
               
               
                
                            
                
            
                
           
                
            </div>
        )
    }
}
export default HeaderCollection;