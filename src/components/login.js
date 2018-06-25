import React, { Component } from 'react';
import {Button} from 'react-materialize';
import {userActions} from '../actions/userActions';
import News from './news';
import Header from './header';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            login:'',
            username:'',
            password:'',
            error:'',
            errorR:''
        }
    }

    handleEmailChange =(e) =>{
        this.setState({username: e.target.value});
    }   

    handlePasswordChange =(e) =>{
        this.setState({password: e.target.value});
    }

    handleResponse(res){
        if(res.status === 200||res.status === 201){
            this.props.history.push('/dashboard')
        }else{
            console.log('Fail' +res.statusMessage)
            this.setState({error: res.statusMessage})
        }
    }

    /*handleRegisterResponse(res){
        if(res.status === 200||res.status === 201){
            this.props.history.push("/dashboard")
        }else{
            console.log('Fail' +res.statusMessage)
            this.setState({errorR: res.statusMessage})
        }
    }*/

    handleLogin = () => {
        const res = userActions.login(this.state.username,this.state.password);

        this.handleResponse(res)
    }

    handleLoginWithFacebook = () => {
        userActions.loginFacebook()
    }

    handleLoginWithGoogle = () => {
        userActions.loginGoogle()
    }

    handleRegistration = () => {
        const res = userActions.register(this.state.username,this.state.password)

        this.handleResponse(res)
    }

    handleRegistrationWithFacebook = () => {
        userActions.registerFacebook()
    }

    handleRegistrationWithGoogle = () => {
        userActions.registerGoogle()
    }

    render() {
        return (
            <div className='login-news row'>
                <div className='login-news-header'>
                    <Header/>
                </div>
                <div className='newsComponent'>
                    <News/>
                </div>
                <br/>
                <div className='loginPage'>
                    <div className='row'>
                        <div className='col s12'>
                            <ul className="tabs">
                            <li className='tab col s3'><a href='#test1'>Login</a></li>
                            <li className='tab col s3'><a href='#test2'>Register</a></li>
                            </ul>
                        </div>
                        <div id='test1' className='col s12'>
                            <div className="z-depth-1 grey lighten-4 row">
                            <form className='col s12 login-form'>
                                {this.state.error &&
                                <div className='error'>
                                    {this.state.error}
                                </div>}
                                <div className='input-field col s12'>
                                    <input className='validate' type='email' name='username' id='username-1' required='required' onChange={this.handleEmailChange}/>
                                    <label className='username'>Enter your email</label>
                                </div>
                                <div className='input-field col s12'>
                                    <input className='validate' type='password' name='password' id='password-1' required='required' onChange={this.handlePasswordChange }/>
                                    <label className='password'>Enter your password</label>
                                </div>
                                <br />
                                <center>
                                    <div className='login-page-buttons'>
                                        <div className='login-button-user'>
                                        <Button type='submit' id='user-1' name='btn_login' className='waves-effect waves-light user' onClick={this.handleLogin}>Login</Button>
                                        <Button id="skip" waves='light' node='a' href='/dashboard'> 
                                        Skip
                                        </Button>
                                        </div>
                                        <h6 className='loginOr'><span>OR</span></h6>
                                        <div className='login-button-facebook'>
                                        <Button type='submit' id='facebook-1' name='btn_login_facebook' className='waves-effect waves-light btn social facebook' onClick={this.handleLoginWithFacebook}>
                                        <i className="fa fa-facebook"></i> Log In with Facebook</Button>
                                        </div>
                                        <div className='login-button-google'>
                                        <Button type='submit' id='google-1' name='btn_login_google' className='waves-effect waves-light google-button btn social google' onClick={this.handleLoginWithGoogle}> 
                                        <i className='fa fa-google'></i> Log In with Google</Button>
                                        </div>
                                    </div>
                                </center>
                            </form>
                            </div>
                        </div>
                        <div id='test2' className='col s12'>
                            <div className='z-depth-1 grey lighten-4 row'>
                            <form className='col s12 register-form'>
                                {this.state.error &&
                                <div className='error'>
                                    {this.state.error}
                                </div>}
                                <div className='input-field col s12'>
                                    <input className='validate' type='email' name='username' id='username' required='required' onChange={this.handleEmailChange}/>
                                    <label className='username'>Enter your email</label>
                                </div>
                                <div className='input-field col s12'>
                                    <input className='validate' type='password' name='password' id='password' required='required' onChange={this.handlePasswordChange }/>
                                    <label className='password'>Enter your password</label>
                                </div>
                                <br />
                                <center>
                                    <div className='register-page-buttons'>
                                        <div className='register-button-user'>
                                        <Button type='submit' id="user" name='btn_register' className='waves-effect waves-light user' onClick={this.handleRegistration}>Register</Button>
                                        <Button id="skip" waves='light' node='a' href='/dashboard'> 
                                        Skip
                                        </Button>
                                        </div>
                                        <h6 className='registerOr'><span>OR</span></h6>
                                        <div className='register-button-facebook'>
                                        <Button type='submit' id="facebook" name='btn_register_facebook' className='waves-effect waves-light btn social facebook' onClick={this.handleRegistrationWithFacebook}>
                                        <i className="fa fa-facebook"></i> Register with Facebook</Button>
                                        </div>
                                        <div className='register-button-google'>
                                        <Button type='submit' id="google" name='btn_register_google' className='waves-effect waves-light google-button btn social google' onClick={this.handleRegistrationWithGoogle}> 
                                        <i className="fa fa-google"></i> Register with Google</Button>
                                        </div>
                                    </div>
                                </center>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;