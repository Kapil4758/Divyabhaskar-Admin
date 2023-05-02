import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Addblog from "./Addblog";

const Dashboard = () => {

    let [state, setState] = useState();

    let dashboard = "dashboard";
    
    useEffect(() => {
        
        setState(window.sessionStorage.getItem("masterAdmin"));
        
    }, [setState]);
    
    let navigate = useNavigate();

    if(state !== "true" || state === null || state === ""){
        navigate("/login");
    }
    else{
        dashboard += " active"
    }

    return(
        <div className={dashboard}>
            <Addblog />
        </div>
    )
}

export default Dashboard;