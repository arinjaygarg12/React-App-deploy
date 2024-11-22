import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('')
    const [isBold, setIsBold] = useState(false);
    const wordCount = text.split(' ').length - text.split(' ').filter((element)=>{return element.length === 0}).length;
    const characters = text.length - text.split(' ').filter((element)=>{return element.length === 0}).length;
    const HandleUpClick = ()=>{

        setText(text.toUpperCase())
    }
    const handleOnChange = (event)=>{

        setText(event.target.value)
    }
    const MakeBold = ()=>{
        setIsBold(!isBold)
    }
    const handleCopy = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="from form-control bg-transparent border-2px border-black" style={{ fontWeight: isBold ? 'bold' : 'normal' }} id="mybox" onChange={handleOnChange} value={text} rows="10"></textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={HandleUpClick} >Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
             <button className="btn btn-primary" onClick={MakeBold}>Make Bold</button>
        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text ? `${wordCount} words and ${text.length} characters and ${characters}(withoutspaces)` : "empty"}</p>
            <h2>Preview</h2>
            <p>{text ? text: "Enter Some Text To preview"}</p>
        </div>
        </>

  )
}

