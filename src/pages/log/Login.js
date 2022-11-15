// tools
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// pages
import Register from "./Register";

export default function Login() {
    const [login, setLogin] = useState();
    const [send, setSend] = useState(false);

    const navigate = useNavigate();

    function makeLogin({ value, name }) {
        setLogin({
          ...login,
          [name]: value,
        });
    }

    function submitThis(event) {
        event.preventDefault();
        setSend(true)
    }

    console.log(login)
    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={submitThis}>
                <Input type={"email"} name={"email"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"E-mail"} />
                <Input type={"password"} name={"password"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Senha"} />
                <Button type={"submit"}>ENTRAR</Button>
            </Form>
            <Register onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</Register>
        </Container>
    );
}

const Container = styled.div`
`

const Form = styled.form`
`

const Input = styled.input`
`

const Button = styled.button`
`