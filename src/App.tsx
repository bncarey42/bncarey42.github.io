import './App.css'
import {useState} from "react";

function App() {
    const [bgImg] = useState<string>(['"../RI:TorcHead:Walkway.jpg"', '"../NI:GiantsCauseway:Stones.jpg"'][Math.floor(Math.random() * 2)])
    return (
        <div>
            <div
                className="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center backdrop-opacity-35 bg-white"
                style={{backgroundImage: `url(${bgImg})`}}>
                <h1 className={"text-white"}>Scroll Up and Down to see the parallax effect</h1>
            </div>


            <div className="m-20 space-y-8 lg:mx-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet viverra ante et
                    tincidunt.
                    Nullam
                    mollis, elit consectetur iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed nibh.
                    Nam eu
                    eros
                    fermentum, aliquam sem at, accumsan augue. Aenean lacus lorem, interdum vel fermentum sed, sodales
                    id
                    libero.
                    Nullam vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam et orci at mi ultricies
                    laoreet
                    et
                    eget ipsum. Aliquam luctus posuere efficitur. Mauris scelerisque leo malesuada tellus malesuada
                    accumsan. Ut
                    non
                    metus velit. Vestibulum lectus nulla, ornare a nisl nec, pretium viverra tellus. Phasellus sit amet
                    magna
                    augue.
                    Sed a diam pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.</p>

                <p> Donec eros risus, porttitor eget risus vel, pulvinar hendrerit ante. Maecenas quis pretium metus.
                    Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nam
                    rutrum,
                    augue
                    et sagittis aliquam, mi nisi lobortis enim, eget egestas sapien urna in turpis. Quisque scelerisque
                    dolor
                    sagittis lorem accumsan, at tempus odio convallis. Nulla venenatis pulvinar ipsum vel auctor.
                    Praesent a
                    enim at
                    erat fringilla lacinia. Aenean eu ultrices ante.</p>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Curabitur imperdiet viverra ante et
                    tincidunt.
                    Nullam
                    mollis, elit consectetur iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed nibh.
                    Nam eu
                    eros
                    fermentum, aliquam sem at, accumsan augue. Aenean lacus lorem, interdum vel fermentum sed, sodales
                    id
                    libero.
                    Nullam vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam et orci at mi ultricies
                    laoreet
                    et
                    eget ipsum. Aliquam luctus posuere efficitur. Mauris scelerisque leo malesuada tellus malesuada
                    accumsan. Ut
                    non
                    metus velit. Vestibulum lectus nulla, ornare a nisl nec, pretium viverra tellus. Phasellus sit amet
                    magna
                    augue.
                    Sed a diam pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.</p>
                <p> Donec eros risus, porttitor eget risus vel, pulvinar hendrerit ante. Maecenas quis pretium metus.
                    Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nam
                    rutrum,
                    augue
                    et sagittis aliquam, mi nisi lobortis enim, eget egestas sapien urna in turpis. Quisque scelerisque
                    dolor
                    sagittis lorem accumsan, at tempus odio convallis. Nulla venenatis pulvinar ipsum vel auctor.
                    Praesent a
                    enim at
                    erat fringilla lacinia. Aenean eu ultrices ante.</p>
            </div>
        </div>
    )
}

export default App
