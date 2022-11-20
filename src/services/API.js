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

function newInput(token, body) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/input`, body, {headers});

    return promise;
}

function newOutput( token, body ) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/output`, body, {headers});

    return promise;
}

export { signIn, signUp, historic, newInput, newOutput };