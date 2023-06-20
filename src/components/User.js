import React from "react";
import { IoCloseSharp } from "react-icons/io5";
class User extends React.Component{
	item  = this.props.user
	render(){
		return(
			<div className="container__item">
				<IoCloseSharp className="delete-icon" onClick={()=>this.props.onDelete(this.item.id)}/>
				<h3 className="title">{this.item.user.username}</h3>
				<p className="comment__text">{this.item.body}</p>
			</div>
		)
	}
}
export default User