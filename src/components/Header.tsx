import {Link, Skill} from "../types.ts";
import IconLink from "./IconLink.tsx";
import TechBtn from "./TechBtn.tsx";

interface HeaderInterface {
    title: string
    subtitle?: string;
    tagline?: string;
    links: Link[]
    pages: Link[]
    skills: Skill[]
    photo: string
}

const Header = ({
                    title,
                    links,
                    pages,
                    skills,
                    photo,
                    subtitle,
                    tagline
                }: HeaderInterface) => {
    return <header
        className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
            <div className={"flex justify-start gap-4 section"}>
                <img src={photo}
                     className="rounded-2xl w-1/3 shadow shadow-accent lg:ml-1/4 "
                     alt={`Profile Avatar for ${title}`}/>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        <a href="/">{title}</a>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{subtitle}</h2>
                    <p className="mt-4 max-w-xs leading-normal">{tagline}</p>
                </div>
            </div>

            <nav className="nav hidden lg:block section" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    {pages.map(({href, icon, showTitle, title: linkTitle}: Link) => <li>
                        <IconLink href={href}
                                  title={linkTitle}
                                  icon={icon}
                                  showTitle={showTitle}
                                  key={linkTitle}
                        />
                    </li>)}
                </ul>
            </nav>
            <div className={"section"}>
                <ul className="mt-16 w-max">
                    {skills.map(({skill: {icon, title: skillTitle}, onClick}: Skill) => <TechBtn icon={icon}
                                                                                                 title={skillTitle}
                                                                                                 onClick={onClick}
                                                                                                 key={skillTitle}/>)}
                </ul>
            </div>
        </div>
        <div className={"section"}>
            <h2>Contact</h2>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                {links.map(({href, icon, showTitle, title: linkTitle}: Link) => <li>
                    <IconLink href={href}
                              title={linkTitle}
                              icon={icon}
                              showTitle={showTitle}
                              key={title}/>
                </li>)}
            </ul>
        </div>
    </header>
}

export default Header;
