const Menu =(props)=>{
    console.log(props.greet)
    return(
        <>
        <h1>hello from menu,{props.greet}</h1>
        </>
    )
}
export default Menu