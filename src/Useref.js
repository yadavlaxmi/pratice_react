import React from "react";
function UseRef(){
    const formInputRef=React.useRef(null);
    const focusInput=()=>{
        formInputRef.current.focus();
    }
    return(
    <>
        <h1>
            using useRef to access underlying Dom
        </h1>
        <input ref={formInputRef} type="text"/>
        <button onClick={focusInput}> focus input</button>
    </>
    )
}
export default UseRef