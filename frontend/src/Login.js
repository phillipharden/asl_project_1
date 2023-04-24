import React from 'react'

class Login extends React.Component
{
	render() {
		return (
			<div>
				<a 
				href="https://github.com/login/oauth/authorize?client_id=5c7e7b4931784167cbff"
				className="btn btn-primary"
				>Login With Github</a>
			</div>
		)
	}
}

export default Login