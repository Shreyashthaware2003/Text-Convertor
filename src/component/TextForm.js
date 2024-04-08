import React, { useState } from 'react'

export default function TextForm(props) {
    // UpperCase Function
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    // LowerCase Function
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    // Copy Text
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard", "success")

    }

    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")

    }

    // Clear Text
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "danger")

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container p-5 mb-1  rounded-3 mt-1' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-1">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2c3034', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className='btn btn-primary m-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-secondary m-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-success m-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-warning m-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-danger m-2' onClick={handleClear}>Clear Text</button>
            </div>
            <div className='container my-1 p-5 mb-1 rounded-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p >{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
