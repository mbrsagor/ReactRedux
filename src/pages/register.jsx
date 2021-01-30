import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction';


class Registration extends React.Component {

    state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
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
        this.props.register(this.state, this.props.history)
    }

    render() {
        const { username, email, password1, password2, error } = this.state
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
                                    <label htmlFor="username">Enter Username</label>
                                    <input
                                        type="text"
                                        placeholder="Enter username"
                                        name="username"
                                        id="username"
                                        className={error.username ? 'form-control is-invalid': 'form-control'}
                                        value={username}
                                        onChange={this.changeHandler}
                                    />
                                    {error.username && <div className="invalid-feedback">{error.username}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Enter a valid email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        id="email"
                                        className={error.email ? 'form-control is-invalid': 'form-control'}
                                        value={email}
                                        onChange={this.changeHandler}
                                    />
                                    {error.email && <div className="invalid-feedback">{error.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Enter password</label>
                                    <input
                                        type="password"
                                        placeholder="*******************"
                                        name="password1"
                                        id="password1"
                                        className={error.password1 ? 'form-control is-invalid': 'form-control'}
                                        value={password1}
                                        onChange={this.changeHandler}
                                    />
                                    {error.password1 && <div className="invalid-feedback">{error.password1}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Enter confirm password</label>
                                    <input
                                        type="password"
                                        placeholder="*******************"
                                        name="password2"
                                        id="password2"
                                        className={error.password2 ? 'form-control is-invalid': 'form-control'}
                                        value={password2}
                                        onChange={this.changeHandler}
                                    />
                                    {error.password2 && <div className="invalid-feedback">{error.password2}</div>}
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {register}) (Registration)
