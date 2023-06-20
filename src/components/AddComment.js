import React from "react";
class AddComment extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			body: '',
			comment: ''
		}
	}
	componentDidMount() {
		const savedComment = localStorage.getItem('savedComment');
		if (savedComment) {
			this.setState({ comment: savedComment });
		}
	}
	render(){
		return(
			<form ref={(el)=>this.myForm = el} className="form">
				<textarea className="form__textarea" placeholder="Write your comment" value={this.state.comment} onChange={(e)=>{
					this.setState({body:e.target.value})
					this.setState({comment: e.target.value });
					localStorage.setItem('savedComment', this.state.comment)
					}}></textarea>
				<button className="form__button" type="button" onClick={() => {
					this.props.onAdd({body: this.state.body, user:{username:'User'}})
					this.setState({comment:''});
					this.myForm.reset()
					}}>Send</button>
			</form>
		)
	}
}
export default AddComment