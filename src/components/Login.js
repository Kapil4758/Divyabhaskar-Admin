import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    let navigate = useNavigate();

    const userLogin = (e) => {

        e.preventDefault();

        fetch("http://localhost:3001/masterAdmin?email="+email, {
            method: "GET",
            headers: {"content-type":"application/json"}
        }).then(async (res) => {

            let userRec = await res.json();

            if(userRec[0].email === null || userRec[0].email === ""){
                toast.error("Email not found");
            }
            else{
                if(userRec[0].password === password){
                    navigate("/");
                    toast.success("Login successfully");

                    window.sessionStorage.setItem("masterAdmin", "true");
                }
                else{
                    toast.error("This password is not found in our record");
                }
            }

        }).catch((err) => {
            toast.error("Record not found");
        })

    }

    return (
        <div className="login-form">
            <h2 className='login-title'>Log in</h2>
            <form onSubmit={(e) => userLogin(e)}>
                <div className="admin-email">
                    <label>Email:</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="admin-password">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" className="login-btn" value="Log in" />
            </form>
        </div>
    )
}

export default Login;