import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';
import { toast, ToastContainer } from "react-toastify";

const Updateblog = () => {

    let id = useParams();

    let navigate = useNavigate();

    const editor = useRef(null);
    
    let [state, setState] = useState({
        heading: "",
        title: "",
        media: "",
        content: ""
    });

    let [heading, setHeading] = useState();
    let [title, setTitle] = useState();
    let [media, setMedia] = useState();
    let [content, setContent] = useState();

    fetch("http://localhost:3001/blogData/"+id.id, {
        method: "GET",
        headers: { "content-type": "application/json" }
    }).then(async (res) => {

        let record = await res.json();
        
        setState({
            heading: record.heading,
            title: record.title,
            media: record.media,
            content: record.content,
        })

        heading(record.heading);
        title(record.title);
        media(record.media);
        content(record.content);
        
    })

    const updateDetail = (e) => {

        e.preventDefault();

        let updateRec = {
            heading: e.target.heading.value,
            title: e.target.title.value,
            media: e.target.media.value,
            content: e.target.content.value
        }

        fetch("http://localhost:3001/blogData/"+id.id, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(updateRec)
        }).then((rec) => {

            toast.success("Blog updated successfully");

            navigate("/blogs")

        }).catch((err) => {
            toast.error(err.message)
        })

    }


    return (
        <div className='update-blog'>
            <h2 className='update-blog-title'>Update Blog</h2>
            <form onSubmit={(e) => updateDetail(e)}>
                <div className='blog-title-1'>
                    <label>Blog title 1</label>
                    <input type="text" name="heading" value={heading ? heading : state.heading} onChange={(e) => setHeading(e.target.value)} />
                </div>
                <div className='blog-title-2'>
                    <label>Blog title 2</label>
                    <input type="text" name="title" value={title ? title : state.title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='blog-thumbnail'>
                    <label>Blog thumbnail</label>
                    <input type="url" name="media" value={media ? media : state.media} onChange={(e) => setMedia(e.target.value)} />
                </div>
                <div className='blog-content'>
                    <label>Blog content</label>
                    <JoditEditor
                        ref={editor}
                        name="content"
                        value={content ? content : state.content}
                        onChange={newContent => setContent(newContent)}
                    />
                </div>
                <input type="submit" className="update-btn" value="Update Blog" />
            </form>
            <ToastContainer />
        </div>
    )
}

export default Updateblog;