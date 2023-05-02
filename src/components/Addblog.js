import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from "react-toastify";

const Addblog = () => {

	const editor = useRef(null);
    
    const [heading, setHeading] = useState();
    const [title, setTitle] = useState();
    const [media, setMedia] = useState();
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('');

    const submitDetail = (e) => {

        e.preventDefault();

        let blogDetail = {
            heading: heading,
            title: title,
            media: media,
            content: content,
            categoryid: category
        }

        fetch("http://localhost:3001/blogData", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(blogDetail)
        }).then((res) => {
            toast.success("Blog record uploaded");
        }).catch((err) => {
            toast.error("Blog record not uploaded");
        })

        setHeading("");
        setTitle("");
        setMedia("");
        setContent("");
        setCategory("");

    }

	return (
        <div className='add-blog'>
            <h2 className='add-blog-title'>Add Blog</h2>
            <form onSubmit={(e) => submitDetail(e)}>
                <div className='blog-title-1'>
                    <label>Blog title 1</label>
                    <input type="text" name="b-title-1" value={heading} onChange={(e) => setHeading(e.target.value)} />
                </div>
                <div className='blog-title-2'>
                    <label>Blog title 2</label>
                    <input type="text" name="b-title-2" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='blog-thumbnail'>
                    <label>Blog thumbnail</label>
                    <input type="url" name="b-thumbnail" value={media} onChange={(e) => setMedia(e.target.value)} />
                </div>
                <div className='blog-content'>
                    <label>Blog content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />
                </div>
                <div className='blog-category'>
                    <label>Blog Category</label>
                    <div className='add-category'>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">--- Select Category ---</option>
                            <option value="1">Sports</option>
                            <option value="2">Entertainment</option>
                            <option value="3">India</option>
                            <option value="4">World</option>
                            <option value="5">Astrology</option>
                        </select>
                    </div>
                </div>
                <input type="submit" className='submit-btn' value="Add Blog" />
            </form>
        </div>
	);
};

export default Addblog;