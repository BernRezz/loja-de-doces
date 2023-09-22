import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/css/Form.css';

function FormStructure(props) {

    const { email, senha, nome, handleChange, formError, didRegister, signin, login, refreshForm, formType, setFormType } = props;

    if (formType === 'login') {

        return (
            <div className='formCard'>
                <button className='closeBtn' onClick={refreshForm}>✕</button>
                {props.children}

                <h1>Entrar</h1>

                <form onSubmit={login}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className='inputForm'
                        value={email}
                        onChange={handleChange}
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        className='inputForm'
                        value={senha}
                        onChange={handleChange}
                        
                    />

                    <p className='success'>{didRegister}</p>

                    <p className='invalidForm'>{formError}</p>

                    <button type='submit' className='advance'>Entrar</button>

                    <label htmlFor="signIn" className='formSwitch'>
                        Não possui uma conta? <Link onClick={() => { setFormType('signup'), console.log(formType); }}>inscreva-se</Link>
                    </label>
                </form>
            </div>
        );
    } else if (formType === 'signup') {

        return (
            <div className='formCard'>
                <button className='closeBtn' onClick={() => { refreshForm(), setFormType('login') }}>✕</button>

                <h1>Registrar</h1>

                <form onSubmit={signin}>
                    <label htmlFor="text">Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={handleChange}
                        className='inputForm'
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className='inputForm'
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={handleChange}
                        className='inputForm'
                    />

                    <p className='invalidForm'>{formError}</p>

                    <button type="submit" className='advance'>Registrar</button>

                    <label htmlFor="signIn" className='formSwitch'>
                        Já possui uma conta? <Link onClick={() => { setFormType('login') }}>Entrar</Link>
                    </label>
                </form>
            </div>
        );
    }

}

export default FormStructure;