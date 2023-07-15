import React, { useContext, useState } from 'react';

import './Auth.css';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/Formelements/Input';
import Button from '../../shared/components/Formelements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        }
    }, false);

    const switchModeHandler = () => {
        if(!isLogin){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLogin(prevMode => !prevMode);
    }

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState)
        auth.login();
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLogin && (
                    <Input 
                        id="name"
                        element="input"
                        type="text"
                        label="Your Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name"
                        onInput={inputHandler}
                    />
                )}
                <Input 
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter valid Email"
                    onInput={inputHandler}
                />
                <Input 
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter valid passowrd, atleast 5 characters."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>{isLogin ? 'LOGIN' : 'SIGNUP'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>Switch to {isLogin ? 'SIGNUP' : 'LOGIN'}</Button>
        </Card>
    )
};

export default Auth;