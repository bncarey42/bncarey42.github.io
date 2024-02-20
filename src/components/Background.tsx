import {useState} from "react";

export const Background = () => {

    const [bg] = useState<string>(`w-full h-screen bg-${['torc-head', 'causeway'][Math.floor(Math.random() * 2)]} bg-center relative`)



    return <div className={"-z-10 sticky top-0"}>
        <div className={'-z-10 absolute top-0 left-0 w-full h-full'}>
            <div className={`w-full h-screen bg-white/75 relative`}/>
        </div>

        <div className={'-z-20 top-0 left-0 w-full h-full absolute'}>
            <div className={bg}></div>
        </div>
    </div>
}
