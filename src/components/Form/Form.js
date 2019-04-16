import React, {Component} from 'react';
import './Form.css';

import bondImage from "./assets/bond_approve.jpg";


class Form extends Component{

    state = {
        firstname:'', 
        lastname:'', 
        password:'', 

        firstnameError:'',
        lastnameError:'',
        passwordError:'',

        isLogin:false

    };

    // сабмит формы, все поля на проверку
    handleClickForm = event =>{
        event.preventDefault();

        const { firstname, lastname, password } = this.state;

        let isFormHasErrors = false;


        if(firstname === ''){
            this.setState({firstnameError:'Нужно указать имя'});

            isFormHasErrors = true
        }else if (!(firstname === 'James')){
            this.setState({firstnameError:'Имя указано не верно'})

            isFormHasErrors = true;
        }

        if(lastname === ''){
            this.setState({lastnameError:'Нужно указать фамилию'});

            isFormHasErrors = true
        }else if (!(lastname === 'Bond')){
            this.setState({lastnameError:'Фамилия указана не верно'});

            isFormHasErrors = true;
        }

        if(password === ''){
            this.setState({passwordError:'Нужно указать пароль'});

            isFormHasErrors = true
        }else if (!(password === '007')){
            this.setState({passwordError:'Пароль указан не верно'});

            isFormHasErrors = true;
        }


        // финиальная проверка флага 

        if (!isFormHasErrors){
            this.setState({
                isLogin:true
            });
        }
    };

    // смотрим поле значения имя
    changedFirstName = event =>{
        this.setState({
            firstname:event.target.value,
            firstnameError:'',
            lastnameError:'',
            passwordError:''
        })
    }

    // смотрим поле значения фамилия
    changedLastName = event =>{
        this.setState({
            lastname:event.target.value,
            firstnameError:'',
            lastnameError:'',
            passwordError:''
        })
    }

    // смотрим поле значения пароль
    changedPassword = event =>{
        this.setState({
            password:event.target.value,
            firstnameError:'',
            lastnameError:'',
            passwordError:''
        })
    }


    render(){
        let { firstname, lastname, password } = this.state;

        return(
            <div>
                <form onSubmit={this.handleClickForm} className={this.state.isLogin && 'none form'}>
                    <h1>Введите свои данные, агент</h1>
                    <p className="field">
                        <label className="field__label">
                            <span className="field-label">Имя</span>
                            <input className="field__input field-input t-input-firstname" type="text" name="firstname" value={firstname} onChange={this.changedFirstName}/>
                            <span className="field__error field-error t-error-firstname">{this.state.firstnameError}</span>
                        </label>
                    </p>
                    <p className="field">
                        <label className="field__label">
                            <span className="field-label">Фамилия</span>
                            <input className="field__input field-input t-input-lastname" type="text" name="lastname" value={lastname} onChange={this.changedLastName}/>
                            <span className="field__error field-error t-error-lastname">{this.state.lastnameError}</span>
                        </label>
                    </p>
                    <p className="field">
                        <label className="field__label">
                            <span className="field-label">Пароль</span>
                            <input className="field__input field-input t-input-password" type="password" name="password"  value={password} onChange={this.changedPassword}/>
                            <span className="field__error field-error t-error-password">{this.state.passwordError}</span>
                        </label>
                    </p>
                    <div className="form__buttons">
                        <input className="button t-submit" type="submit" value="Проверить"/>
                    </div>
                </form>
                <img src={bondImage} alt="james bond" className={this.state.isLogin ? 'visible t-bond-image' : 'none t-bond-image'} />
            </div>
        )
    }
}


export default Form;