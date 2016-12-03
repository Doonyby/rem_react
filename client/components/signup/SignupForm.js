import React from "react";

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} >
				<h1>Join our community!</h1>
				<div className="form-group">
					<label className="control-label">Username</label>
					<input 
						value={this.state.username} 
						onChange={this.onChange} 
						type="text" 
						name="username" 
						className="form-control" />
				</div>
				<div className="form-group">
					<label className="control-label">Email</label>
					<input 
						value={this.state.email} 
						onChange={this.onChange} 
						type="email" 
						name="email" 
						className="form-control" />
				</div>
				<div className="form-group">
					<label className="control-label">Password</label>
					<input 
						value={this.state.password} 
						onChange={this.onChange} 
						type="password" 
						name="password" 
						className="form-control" />
				</div>
				<div className="form-group">
					<label className="control-label">PasswordConfirmation</label>
					<input 
						value={this.state.passwordConfirmation} 
						onChange={this.onChange} 
						type="password" 
						name="passwordConfirmation" 
						className="form-control" />
				</div>				
				<div className="form-group">
					<button className="btn btn-primary btn-large">Sign up</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;