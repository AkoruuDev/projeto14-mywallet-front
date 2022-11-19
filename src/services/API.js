import axios from "axios"

const BASE_URL = 'http://localhost:5000'

function signIn(login) {
    const promise = axios.post(`${BASE_URL}/sign-in`, login);

    return promise;
}

function signUp(register) {
    const promise = axios.post(`${BASE_URL}/sign-up`, register);

    return promise;
}

function historic(token) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.get(`${BASE_URL}/historic`, {headers});

    return promise;
}

function newInput(title, description, value, token) {
    const body = {
        title,
        description,
        value
    }
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/new-input`, body, headers);

    return promise;
}

function newOutput(title, description, value, token) {
    const body = {
        title,
        description,
        value
    }
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/new-output`, body, headers);

    return promise;
}

export { signIn, signUp, historic, newInput, newOutput };