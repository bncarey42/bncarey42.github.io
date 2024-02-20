import {useState} from "react";

export const Background = () => {
    const [bg] = useState<string>(['url("../RI:TorcHead:Walkway.jpg")', 'url("../NI:GiantsCauseway:Stones.jpg")'][Math.floor(Math.random() * 2)])
    //bg-torc-head or bg-causeway
    return <>
        <div className={'-z-10 top-0 left-0 w-full h-screen bg-local absolute'}>
            <div className={`w-full h-screen bg-white/75 relative`}/>
        </div>
        <div className={'-z-20 top-0 left-0 w-full h-screen bg-center bg-local absolute'} style={{backgroundImage: bg}}>
            <div className={"w-full h-screen relative"}></div>
        </div>
    </>
}
