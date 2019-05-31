import React, {Component} from 'react';
import '../seedActualStyle.css';

 class Card extends Component{

    render(){
        
        return(
        
            <div className="Rectangle-231">
                <div className="Rectangle-312" >  {this.props.comment}  </div>
                <div className="date">     {this.props.date}     </div>
                <div className="mainline"> {this.props.mainline} </div> 
                <div className="ctgry"> {this.props.category} </div>
            </div>

        )
    }
}


export default Card;