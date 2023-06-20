import React from "react";
import User from "./User";
class Users extends React.Component{
	render(){
		if(this.props.users.length > 0)
		return(
			<div className="container">
				{this.props.users.map((el)=>(
				<User onDelete={this.props.onDelete} key={el.id} user={el}/>
				))}
			</div>
		)
		else return(
			<div>
				<h3>Користувачів немає</h3>
			</div>
		)
	}
}
export default Users