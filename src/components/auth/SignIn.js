import React, {Component} from "react"
//import SignUp from "./SignUp"
class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){

        console.log(event)
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className='box-login-tab'></div>
                <div className='box-login-title'>
                    <div className='i-login'></div><h3>Connecter</h3>
                </div>


                <div className="box">

                    <label>Nom d'utlilisateur </label><br/>
                    <input type="text" name="userName"  onChange={this.handleChange} />
                    <br/>
                    <label>Mot de passe</label><br/>
                    <input type="password" name="password"  onChange={this.handleChange} />


                    <h1>{this.state.userName} {this.state.password}</h1>
                    <input type="submit" id="submit"/>

                    <h5>Vous n'avez pas de encore de compte ? <a href="https://www.w3schools.com">Créez-en Un !</a> </h5>
                </div>
            </form>
        )
    }
}

export default SignIn
