import './App.css'
import {Background} from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import {useEffect, useState} from "react";
import {Resume} from "./types.ts";
import Role from "./components/resume/Role.tsx";

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
                <div className={"mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"}>
                    <div className={"lg:flex lg:justify-between lg:gap-4 "}>
                        <Header title={"Ben Carey"} subtitle={"Subtitle"} tagline={"Software Engineer"} links={[{
                            showTitle: false,
                            icon: 'devicon-github-original ',
                            title: 'GitHub',
                            href: 'https://github.com/bncarey42'
                        }]} pages={[]} skills={[]} photo={'https://avatars.githubusercontent.com/u/11987913?v=4'}/>

                        <div className={"lg:w-1/2 lg:py-24 "}>
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
                                {!loading && resume?.work.filter(() => true).map((role, idx) =>
                                    <Role title={role.title}
                                          startDate={role.startDate}
                                          endDate={role.endDate}
                                          technologies={role.technologies}
                                          description={role.description}
                                          duties={role.duties}
                                          projects={role.projects}
                                          key={idx}
                                    />)}
                            </div>
                        </div>
                    </div>
                    {/*<div className={'grid gap-3 grid-cols-4'}>
                        <div className={'rounded-tl-lg'}></div>
                        <div className={"col-span-3 rounded-tr-lg px-8 py-6"}></div>

                        <div className={"h-full px-3 space-y-8 "}>
                            <h2>Skills</h2>
                            <h2>Education</h2>
                            <h2>Contact/Social</h2>
                        </div>
                        <div className={"h-full col-span-3 space-y-8"}>

                        </div>
                    </div>*/}
                </div>

            </div>
        </Background>
    )
}

export default App
