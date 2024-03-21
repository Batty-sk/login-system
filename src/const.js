import axios from 'axios'

export const loginOrRegister = async (data, url) => {
    let ReqData = {}
    try {
        if (url === 'register'){
            ReqData = {username:data.username,
                email:data.email,
                dob:data.dob,
                password:data.password,
            }
        }
        else{
            ReqData ={username:data.username,
            password:data.password}
        }
        const res = await axios.post(`http://localhost:8000/${url}`, ReqData);
        console.log(res.data)
        if (!(res.status === 200 || res.status === 201)) {
            throw new Error(res.error);
        }
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('token', res.data.token);
    } catch (error) {
        throw error; 
    }
};


