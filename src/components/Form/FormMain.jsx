import { React, useState } from 'react'
import { userRegister } from '../../Validation/UserRegister';

import FormStructure from './FormStructure';

function FormMain(props) {

    const { formBtn, popUpHandle } = props;

    const [isLoged, setIsLoged] = useState(false);

    const [didRegister, setDidRegister] = useState('');
    const [formError, setFormError] = useState('');
    const [formType, setFormType] = useState('login');


    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const handleChange = (event) => {

        const { type, value } = event.target;

        switch (type) {
            case 'text':
                setNome(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setSenha(value);
                break;
            default:
                break;
        }

        setDidRegister('')
        setFormError('')
    };

    const signin = async (event) => {
        event.preventDefault();

        let account = {
            nome: event.target[0].value,
            email: event.target[1].value,
            senha: event.target[2].value
        }

        const isValid = await userRegister.isValid(account)

        const response = await fetch(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja`);
        const api = await response.json();

        const matchingAccount = api.find(obj => obj.account && obj.account.email === account.email);

        if (isValid) {

            console.log(matchingAccount);

            if (matchingAccount == undefined) {

                fetch(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja`, {
                    method: 'POST',
                    body: JSON.stringify({
                        account
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                setFormError('')
                setDidRegister('Email cadastrado com sucesso!')
                setFormType('login')
            } else {

                setFormError('(Email já cadastrado, tente novamente)*')
                setEmail('')
            }

        } else {
            console.log('isnt valid'), setFormError('(sua senha deve possuir de 6 a 20 caracteres)*')
        }

        console.log(response);
    };

    const login = async (event) => {
        event.preventDefault();

        let loginData = {
            email: event.target[0].value,
            senha: event.target[1].value
        };

        const response = await fetch(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja`);
        const api = await response.json();

        let matchingAccount = api.find(obj => obj.account && obj.account.email === loginData.email);

        if (matchingAccount && matchingAccount.account.senha === loginData.senha) {

            setIsLoged(true);

            clearForm()
            alert('Login realizado! bem vindo! ' + matchingAccount.account.nome)
        } else {
            setFormError('(Email ou senha invalido(s), tente novamente)*')
        }
    };

    function refreshForm() {

        setFormError('')
        clearForm()

        popUpHandle()
    };

    const clearForm = () => {


        setNome("")
        setEmail("")
        setSenha("")
    };



    if (formBtn === true) {

        return (
            <div className='formulario'>
                <FormStructure
                    email={email}
                    senha={senha}
                    nome={nome}
                    handleChange={handleChange}
                    formError={formError}
                    didRegister={didRegister}
                    signin={signin}
                    login={login}
                    refreshForm={refreshForm}
                    formType={formType}
                    setFormType={setFormType}
                />
            </div>
        );
    }
}

export default FormMain 
