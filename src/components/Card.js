import React, {Component} from 'react';
import '../seedActualStyle.css';
import Data from './object.json'


 class Card extends Component{

    render(){
        return(
            <div className="Rectangle-231" >
                <div className="Rectangle-312" > </div><div className="comment"> {this.props.data.comment}  </div>
                <div className="date">     {this.props.data.date}     </div>
                <div className="mainline"> {this.props.data.mainline} </div> 
                <div className="ctgry"> {this.props.data.category} </div>
            </div>

        )
    }
}


export default Card;