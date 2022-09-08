import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked and the text was " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        //console.log("lowercase was clicked and the text was " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        //console.log("lowercase was clicked and the text was " + text);
        let newText = '';
        setText(newText);
    }
    const handleCopyClick = () => {
        let textInside = document.getElementById("myBox");
        textInside.select();
        navigator.clipboard.writeText(textInside.value);
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode==='light' ?'#042743' :'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light' ?'white' :'grey',color : props.mode==='light' ?'#042743' :'white'}} placeholder="Enter text here" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='light' ?'#042743' :'white'}}>
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes are required to read this text (as per 125wpm).</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text :"Enter some text in the textbox above, to preview it here."}</p>
        </div>
        </>
    )
}
