import {ReactNode, useState} from "react";

export const Background = ({children}:{children:ReactNode}) => {
    const [bgImg] = useState<string>(['"../RI:TorcHead:Walkway.jpg"', '"../NI:GiantsCauseway:Stones.jpg"'][Math.floor(Math.random() * 2)])
    return <>
        <div
            className="w-full h-full bg-fixed bg-cover bg-center backdrop-opacity-35 mb-8"
            style={{backgroundImage: `url(${bgImg})`}}>
            <div
                className="w-full h-full bg-fixed bg-cover bg-center backdrop-opacity-35 bg-white/65"
            >
                {children}
            </div>
        </div>
    </>
}
