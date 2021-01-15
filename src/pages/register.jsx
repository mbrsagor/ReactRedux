import React from 'react';
import { Link } from 'react-router-dom';


class Register extends React.Component {

    state = {
        email: '',
        password1: '',
        password2: '',
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
        const {email, password1, password2, error} = this.state
        return (
            <div className="row">
                <div className="col-md-6 mt-5 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-center">Register here</h4>
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
                                <div className="form-group">
                                    <label htmlFor="password2">Enter confirm password</label>
                                    <input
                                        type="password1"
                                        placeholder="*******************"
                                        name="password2"
                                        id="password2"
                                        className="form-control"
                                        value={password2}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success btn-sm">Register</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <Link to="/login">Already have account.</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
