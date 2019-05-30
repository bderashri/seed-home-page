import React, {Component} from 'react';
import '../seedStyle.css';

 class Card extends Component{

    render(){
        console.log("inside card")
        console.log(this.props.data)
        return(
        
            <div className="cardTemp">
                <div style={{color:'blue',fontWeight:'bold'}}>{this.props.comment}</div>
                <div style={{fontSize:'10px',fontWeight:'bold'}}>  {this.props.date}</div>
                <h4> {this.props.mainline}</h4>
                <div style={{color:'green',fontWeight:'bold',position:'absolute',verticalAlign:'bottom'}}>{this.props.category}</div>
            </div>

        )
    }
}


export default Card;