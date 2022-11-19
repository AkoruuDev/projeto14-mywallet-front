// tools
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../provider/auth";
import { newInput as sendRequest } from "../../services/API";

export default function Inputs() {
    const [newInput, setNewInput] = useState({title: '', description: '', value: ''});
    const [send, setSend] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (send) {
            sendRequest(user.token, newInput)
                .then(res => {
                    console.log(res)
                    navigate('/home')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [send]);

    const navigate = useNavigate();

    function saveInput({ name, value }) {
        setNewInput({
            ... newInput,
            [name]: value
        });
    }

    function submitThis(event) {
        event.preventDefault();
        setSend(true);
    }

    console.log(newInput)
    return (
        <Container>
            <Title>Nova entrada</Title>
            <Form onSubmit={submitThis}>
                <Input type={"text"} name={"value"} onChange=
                    {(e) => saveInput({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Valor"} />
                <DescriptionInput type={"textarea"} name={"description"} onChange=
                {(e) => saveInput({
                        name: e.target.name,
                        value: e.target.value
                    })
                }
                placeholder={"Descrição"} />
                <Input type={"text"} name={"title"} onChange=
                    {(e) => saveInput({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Titulo"} />
                <Button type={"submit"}>SALVAR ENTRADA</Button>
                <Cancel onClick={() => navigate('/home')}>CANCELAR</Cancel>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8c11be;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    width: 70vw;
    font-size: 30px;
    color: #FFFFFF;
    margin: 25px 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
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

const DescriptionInput = styled.textarea`
    height: 150px;
    width: 100%;
    border-radius: 5px;
    border: solid 1px #FFFFFF;
    margin: 7px 0;
    padding: 10px 12px 0;
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

const Cancel = styled(Button)`
    background-color: #c7c7c7;

    &:hover {
        background-color: #b3b3b3;
    }
`