import React, {Component} from "react"
class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            password: "",
            firstName :"",
            lastName: "",
            birthDate: "",
            cin :"",
            mail:"",
            adress:""
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
            <form className="box-container" onSubmit={this.handleSubmit}>
                <div className='box-login-tab'></div>
                <div className='box-login-title'>
                    <div className='i-login'></div><h3>Sign Up</h3>
                </div>


                <div className="box">

                    <label>Nom </label><br/>
                    <input type="text" name="lastName"  onChange={this.handleChange} />
                    <br/>
                    <label>Prénom </label><br/>
                    <input type="text" name="firstName"  onChange={this.handleChange} />
                    <br/>
                    <label>Nom d'Utilisateur </label><br/>
                    <input type="text" name="userName"  onChange={this.handleChange} />
                    <br/>
                    <label>Date de naissance</label><br/>
                    <input type="date" name="birthDate"  onChange={this.handleChange} />
                    <br/>
                    <label>Numero CIN </label><br/>
                    <input type="text" name="cin"  onChange={this.handleChange} />
                    <br/>
                    <label>Email </label><br/>
                    <input type="email" name="mail"  onChange={this.handleChange} />
                    <br/>
                    <label>Adresse</label><br/>
                    <input type="text" name="adress"  onChange={this.handleChange} />
                    <br/>
                    <label>Mot de passe</label><br/>
                    <input type="password" name="password"  onChange={this.handleChange} />


                    <h1>{this.state.userName} {this.state.password}</h1>
                    <input type="submit" id="submit" value="Confirmer"/>


                </div>
            </form>
        )
    }
}

export default SignUp

