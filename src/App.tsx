import './App.css'
import {Background} from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import {useEffect, useState} from "react";
import {Resume} from "./types.ts";
import Employer from "./components/resume/Employer.tsx";

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [resume, setResume] = useState<Resume>()

    useEffect(() => {
            fetch("https://api.github.com/repos/bncarey42/resume/contents/resume.json?ref=main", {
                method: 'GET',
                headers: new Headers({"Accept": "application/vnd.github.VERSION.raw"}),

            })
                .then(response => response.json())
                .then(data => {
                    setResume(data);
                })
                .catch(error => console.error('error', error))
                .finally(() => {
                    setLoading(false);
                });

        }
        , []);

    return (
        <Background>
            <div className={"h-screen"}>
                <div className={"mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-8 lg:py-0"}>
                    <div className={"lg:flex lg:justify-between lg:gap-4"}>
                        <Header title={"Ben Carey"} subtitle={"Subtitle"} tagline={"Software Engineer"} links={[{
                            showTitle: false,
                            icon: 'devicon-github-original ',
                            title: 'GitHub',
                            href: 'https://github.com/bncarey42'
                        }]} pages={[]} skills={[]} photo={'https://avatars.githubusercontent.com/u/11987913?v=4'}/>

                        <div className={"lg:w-2/3 lg:py-24 "}>
                            <div className={"section"}>
                                <h2>Hello There</h2>
                                <p>I am a systems-minded software engineer with a client-focused mindset
                                    with {new Date().getFullYear() - 2017} years of development and engineering
                                    experience.
                                    I am questioning and curious, focusing on simplifying big problems to implement
                                    effective and maintainable solutions. I am a lifelong learner searching for ways to
                                    expand my understanding of fundamental and complex ideas.</p>
                            </div>

                            <div className={'section'}>
                                <h2>Experience</h2>
                                {
                                    resume?.work.map((employer, idx) =>
                                        <Employer
                                            employer={employer.employer}
                                            startDate={employer.startDate}
                                            endDate={employer.endDate}
                                            roles={employer.roles}
                                            key={idx}/>)
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Background>
    )
}

export default App
