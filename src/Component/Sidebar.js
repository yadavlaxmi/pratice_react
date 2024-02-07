const Sidebar=(props)=>{
    const sideStyle={
        background:"azure",
        width:"calc(30% - 10px)",
        marginLeft:"10px",
    }
    return(
        <div
        style={sideStyle}
         className="side">
        <h1>hello from sidebar{props.greet}</h1>
        </div>
    )
}
export default Sidebar