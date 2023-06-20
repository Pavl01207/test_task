import React from "react";
import Users from "./components/Users";
import './style/main.scss'
import AddComment from "./components/AddComment";
import axios from "axios";
const baseUrl = "https://dummyjson.com/comments";
class App extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			users:[
		]}
		axios.get(baseUrl).then((res)=>{
			this.setState({users: res.data.comments})
			console.log(res.data.comments)
		})
		this.addUser = this.addUser.bind(this)
		this.deleteUser = this.deleteUser.bind(this)
	}
	addUser(user){
		const id = this.state.users.length + 1
		this.setState({users:[...this.state.users, {id, ...user}]})
		console.log(user)
		console.log(this.state.users)
	}
	deleteUser(id){
		this.setState({
			users: this.state.users.filter((el)=> el.id !== id)
		})
	}
	render(){
		return (
		<main>
		<Users users={this.state.users} onDelete={this.deleteUser}/>
		<AddComment onAdd={this.addUser}/>
		</main>)
		}
}
export default App;
