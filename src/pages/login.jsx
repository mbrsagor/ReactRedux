import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../store/actions/authAction';


class Login extends React.Component {

    state = {
        username: '',
        password: '',
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps.auth.error)
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)){
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.login({
            username: this.state.username,
            password: this.state.password
        }, this.props.history)
    }

    render() {
        const { username, password, error } = this.state
        // console.log(error);
        // console.log(typeof(error))
        return (
            <div className="row">
                <div className="col-md-6 offset-3 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className="card-title">Login here</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="username">Enter username</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        name="username"
                                        id="username"
                                        className={error.username ? 'form-control is-invalid': 'form-control'}
                                        value={username}
                                        onChange={this.changeHandler}
                                    />
                                    {error.username && <div className="invalid-feedback">{error.username}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Enter password</label>
                                    <input
                                        type="password"
                                        placeholder="*******************"
                                        name="password"
                                        id="password"
                                        className={error.password ? 'form-control is-invalid': 'form-control'}
                                        value={password}
                                        onChange={this.changeHandler}
                                    />
                                    {error.password && <div className="invalid-feedback">{error.password}</div>}
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {login}) (Login);
