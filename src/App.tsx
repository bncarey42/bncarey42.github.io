import './App.css'
import {useState} from "react";
import {Background} from "./components/Background.tsx";

function App() {

    return (
        <Background>
            <div className={"h-96 flex justify-center items-center"}>
                <h1 className={"text-dark sticky top-0"}>Scroll Up and Down to see the parallax effect</h1>
            </div>
            <div className={"bg-light-white/75 mx-48 rounded-lg mb-8"}>
                <div className={'grid gap-3 grid-cols-4'}>
                    <div className={'rounded-tl-lg'}></div>
                    <div className={"col-span-3 rounded-tr-lg px-8 py-6"}></div>

                    <div className={"h-full px-3 space-y-8 "}>
                        <h2>Skills</h2>
                        <h2>Education</h2>
                        <h2>Contact/Social</h2>
                    </div>
                    <div className={"h-full col-span-3 space-y-8"}>
                        
                    </div>
                </div>
            </div>
            <div className={'w-full bg-light-white/75 p-4 text-sm flex justify-center items-center'}>
                Copyright: Whatever you want it to be...
            </div>
        </Background>
    )
}

export default App
