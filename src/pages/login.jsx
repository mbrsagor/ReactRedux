import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: '',
        password1: '',
        error: {}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        const {email, password1, error} = this.state
        return (
            <div className="row">
                <div className="col-md-6 offset-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-center">Login here</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Enter a valid email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Enter password</label>
                                    <input
                                        type="password1"
                                        placeholder="*******************"
                                        name="password1"
                                        id="password1"
                                        className="form-control"
                                        value={password1}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success btn-sm">Login</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <Link to="/registration">Don't have account yet?</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
