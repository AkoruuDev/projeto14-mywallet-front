import axios from "axios"

const BASE_URL = 'localhost:3000'

function signIn(email, password) {
    const user = {
        email,
        password
    }
    const promise = axios.post(`${BASE_URL}/`, user);

    return promise;
}

function signUp(name, email, password) {
    const user = {
        name,
        email,
        password
    };
    const promise = axios.post(`${BASE_URL}/sign-up`, user);

    return promise;
}

function historic(token) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.get(`${BASE_URL}/historic`, headers);

    return promise;
}

function newInput(title, description, value, token) {
    body = {
        title,
        description,
        value
    }
    headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/new-input`, body, headers);

    return promise;
}

function newOutput(title, description, value, token) {
    body = {
        title,
        description,
        value
    }
    headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.post(`${BASE_URL}/new-output`, body, headers);

    return promise;
}

export { signIn, signUp, historic, newInput, newOutput };