import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"
import Table from 'react-bootstrap/Table';

const Blogrecord = () => {

    let [state, setState] = useState();
    
    let navigate = useNavigate();

    fetch("http://localhost:3001/blogData", {
        method: "GET",
        headers: {"content-type":"application/json"}
    }).then(async (res) => {
        let record = await res.json();

        setState(record)
    })

    const deleteBlog = (id) => {

        fetch("http://localhost:3001/blogData/"+id, {
            method: "DELETE",
            headers: {"content-type":"application/json"}
        })

    }

    const updateBlog = (id) => {

        navigate("/updateblog/"+id);

    }

    return(
        <div className="blog-record">
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Media</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {
                    state && state.map((value, index) => {
                        return(
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.heading}</td>
                                <td><img src={value.media} alt="" title="" /></td>
                                <td><button onClick={() => updateBlog(value.id)}>Update</button> || <button onClick={() => deleteBlog(value.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>      
        </div>
    )
}

export default Blogrecord;