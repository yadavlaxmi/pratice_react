const Toggle=()=>{
    let darkModeOn=false;
    const darkMode=<h1>Dark mode is on</h1>
    const lightMode=<h1>light mode is on</h1>
    function handleClick(){
        darkModeOn=!darkModeOn;
        if(darkModeOn==true){
            console.log("Dark mode is on")
        }
        else{
            console.log("light mode is on")
        }
    }
    return(
        <>
        {darkModeOn?darkMode:lightMode}
        <button onClick={handleClick}>
            click me
        </button>
        </>
    )
}
export default Toggle