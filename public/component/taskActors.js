import React,{Component} from 'react';
export default class Actors extends Component{
    render(){

        return(
            <div className="allTAskActors">
             <ul>
                 {this.props.actor.map((per)=>{
                     return(
                         <li className="actors">
                             <img src="./images/avatar.jpg" alt=""/>
                             <span>{per.user_no}</span>
                         </li>
                     );
                 })}

             </ul>
            </div>
        )
    }
}