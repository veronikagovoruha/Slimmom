import axios from "axios";

const instance = axios.create({
    baseURL: 'https://slimmom-backend.goit.global',
});

export const logIn = (state) => {
    return instance.post('/auth/login', 
        state,
    )
}

export const logUp = (state) => {
    return instance.post('/auth/register',
        state,
    )
} 