import ReactPlayer from "react-player";
function Video(){
    const videourl="https://www.youtube.com/watch?v=22bLNq6iCjU&list=RDxJ3vatsNQDU&index=11"

return(
    <div>
        <h1>React player example</h1>
        <ReactPlayer
        url={videourl}
        playing={true}
        volume={0.5}
        />

    </div>
)
}
export default Video