import React, {Component} from 'react';
import Card from './Card'

class Panel extends Component{
    render(){

        return(
            <div>
                {this.props.Data.map((data)=>{
                    console.log("inside panel")
                    console.log(data.id);
                 return(<Card comment={data.comment} date={data.date} mainline={data.mainline} category={data.category}/>)
                })}
                
        </div>
        )
    }
}
export default Panel;