import axios from 'axios'

export const loginOrRegister = async (data, url) => {
    try {
        const res = await axios.post(`http://localhost:8000/${url}`, {
            username: data.username,
            password: data.password
        });
        if (res.status !== 200) {
            throw new Error(res.error);
        }
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('password', res.data.password);
    } catch (error) {
        throw error; 
    }
};


