// tools
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import ButtonConfirm from "../components/ButtonConfirm";
import InputsBox from "../components/InputBox";

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


    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={submitThis}>
                <InputsBox type={"email"} name={"email"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"E-mail"} />
                <InputsBox type={"password"} name={"password"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Senha"} />
                <ButtonConfirm type={"submit"}>ENTRAR</ButtonConfirm>
            </Form>
            <Register onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</Register>
        </Container>
    );
}

const Container = styled.div`
`

const Form = styled.form`
`