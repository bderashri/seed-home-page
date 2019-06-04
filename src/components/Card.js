import React, {Component} from 'react';
import '../seedActualStyle.css';
import check from '../img/check-mark-xxl.png'
 class Card extends Component{
     
    render(){
        if(this.props.data.comment === 'Ready for Market!'){
            return(
                <div className="Rectangle-231-ready"  >
                    <div className= 'Rectangle-312-ready' style={{color:"white"}}><img src={check} className="check"/></div>
                    
                    <div className="comment" style={{color:"white"}}> {this.props.data.comment}  </div>
                    <div className="date" style={{color:"white"}}>     {this.props.data.date}     </div>
                    <div className="mainline" style={{color:"white"}}> {this.props.data.mainline} </div> 
                    <div className="ctgry" style={{color:"white"}}> {this.props.data.category} </div>
                </div>
    
            )
        }
        else{
            return(
                <div className="Rectangle-231" >
                
                <div className={this.props.data.comment==='New!' ? 'Rectangle-312-new' : 'Rectangle-312'}></div>
                <div className="comment"> {this.props.data.comment}  </div>
                <div className="date">     {this.props.data.date}     </div>
                <div className="mainline"> {this.props.data.mainline} </div> 
                <div className="ctgry"> {this.props.data.category} </div>
            </div>

            )
        }
           
        
    }
}


export default Card;