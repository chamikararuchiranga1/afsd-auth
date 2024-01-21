import {Box, Button, Card} from "@mui/material";
import {Link} from 'react-router-dom'
import instance from "../../service/AxiosOrder.jsx";

export default function Login() {

    const loginAction = () => {
        instance.post('/login', {
            email: 'chamikara12345@gmail.com',
            password: '12345'
        })
            .then(function (response) {
                localStorage.setItem('stmToken', response.data.token);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return(
        <Card sx={{width: 400, padding: 4}}>
            <h1>Login</h1>
            <Button variant="contained" onClick={()=> loginAction()}>Login</Button>
            <Link to={'/register'}>
                <h6>Register</h6>
            </Link>
        </Card>
    )
}
