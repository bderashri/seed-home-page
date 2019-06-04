import React, {Component} from 'react';
import '../seedActualStyle.css';
import check from '../img/check-mark-xxl.png'

function GetDiv(props){
    if(props.comment === 'Ready for Market!')
        return <div className= 'Rectangle-312-ready' ><img src={check} alt="tickmark" className="check"/></div>;
    else
        return  <div className={props.comment==='New!' ? 'Rectangle-312-new' : 'Rectangle-312'}></div>;
}

class Card extends Component{
     
   constructor(props){
       super(props);
       this.state={
           comment:'',
       }
   }
    render(){
            return(
                <div className={this.props.data.comment ==='Ready for Market!'?"Rectangle-231-ready":"Rectangle-231" } >
                <GetDiv comment={this.props.data.comment}/>
                <div className="comment"> {this.props.data.comment}  </div>
                <div className="date">     {this.props.data.date}     </div>
                <div className="mainline"> {this.props.data.mainline} </div> 
                <div className="ctgry"> {this.props.data.category} </div>
            </div>

            )
        
           
        
    }
}


export default Card;