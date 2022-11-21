import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../services/API";

export default function Register() {
    const [register, setRegister] = useState({name: '', password: '', email: ''});
    const [validate, setValidate] = useState({passwordConfirm: ''});
    const [send, setSend] = useState(false);

    const navigate = useNavigate();

    function createRegister({ value, name }) {
        setRegister({
          ...register,
          [name]: value,
        });
    }

    function confirmThisPassword({ value, name }) {
        setValidate({
          ...validate,
          [name]: value,
        });
    }

    function submitThis(event) {
        event.preventDefault();
        if (register.name.length < 1 || register.email.length < 1) {
            alert('Todos os campos devem ser preenchidos')
            window.location.reload()
        } else if (register.password.length < 8) {
            alert('A senha deve ter, no mínimo, 8 caracteres')
            window.location.reload()
        } else if (register.password !== validate.passwordConfirm) {
            alert('As senhas não coincidem')
            window.location.reload()
        } else {
            setSend(true)
        }
    }

    useEffect(() => {
        if (send) {
            signUp(register)
                .then(res => {
                    navigate('/')
                })
                .catch(err => {
                    alert(`Não foi possivel fazer o cadastro\nAlgumas coisas podem ter acontecido\nErro no servidor\nEmail já cadastrado (Tente outro)`)
                    document.location.reload()
                })
        }
    }, [send]);

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={submitThis}>
                <Input type={"text"} name={"name"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Nome"} />
                <Input type={"email"} name={"email"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"E-mail"} />
                <Input type={"password"} name={"password"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Senha"} />
                <Input type={"password"} name={"passwordConfirm"} onChange=
                    {(e) => confirmThisPassword({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Confirme sua Senha"} />
                <Button type={"submit"}>CADASTRAR</Button>
            </Form>
            <Login onClick={() => navigate('/')}>Já possuí uma conta? Entre</Login>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8c11be;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 50px;
    color: #FFFFFF;
    margin: 25px 0;
    font-family: 'Saira Stencil One', cursive;
`

const Form = styled.form`
    width: 70vw;

    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px #FFFFFF;
    margin: 7px 0;
    padding: 0 12px;
    font-family: 'Raleway', sans-serif;

    &::placeholder {
        font-family: 'Raleway', sans-serif;
    }
`

const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px #A328D6;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #A328D6;
    margin: 7px 0;
    font-family: 'Raleway', sans-serif;

    &:hover {
        cursor: pointer;
        background-color: #B121EA;
    }
`

const Login = styled.p`
    font-family: 'Raleway', sans-serif;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
        color: #CB63F4;
    }
`