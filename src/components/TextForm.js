import React,{useState} from 'react'

let letters = [];
let redoWords = [];
export default function TextForm(props) {


    const handleUpclick = ()=> {
        setText(text.toUpperCase());
    }
    
    const handleLoclick = ()=> {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleClearClick = ()=> {
        setText("");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
    }
    // last typed word is removed every time
    const handleUndo = ()=>{
        if(text.length !== 0){
        letters = text.split(" ");
        setText(letters.slice(0,letters.length-1).join(" "));
        redoWords.push(letters[letters.length-1]);
        }
    }
    // redo last removed word
    const handleRedo = ()=>{
        if(redoWords.length !== 0){
        setText(text+" " + redoWords[redoWords.length-1]);
        redoWords.pop();
        }
    }

    const [text,setText] = useState("");

    return (
        <>
        <div className='container' style={{color :props.mode === "dark" ? "white" : "black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    placeholder = "Enter text here" 
                    value = {text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="7" 
                    style={{
                        backgroundColor :props.mode === "dark" ? "#212529":"white",
                        color:props.mode === 'dark'?'white':'black' }}>    
                </textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleUndo}>Undo text</button>
                <button className="btn btn-primary mx-1" onClick={handleRedo}>Redo text</button>
        </div>

        <div className="container my-3" style={{color :props.mode === "dark" ? "white" : "black"}}>

            <h2>Your Text Summary</h2>
            
            {text.length !== 0 &&
                <p>{text.split(" ").length} words and {text.length} characters</p>
                  }
            {text.length === 0 &&
                           <p>0 words and {text.length} characters</p>
                           }
            {/* on average 125 words/min ==> 1/125 = 0.008 */}
            <p>{(text.split(" ").length-1)*0.008} minutes of reading</p>

            <h2>Preview</h2>
            <p>{text.length>0?text : "Enter text in the above box to preview it"}</p>

        </div>
        </>
    )
}
