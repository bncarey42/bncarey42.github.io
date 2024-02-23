import {Link} from "../types.ts";

const IconLink = ({title, showTitle, href, icon}: Link) => (<>
    <a className={'hover:bg-dark/75 flex gap-2 justify-between px-2 py-1'} href={href} title={title}>
        {icon && <i className={icon}></i>}
        {showTitle && <p className={""}>{title}</p>}
    </a>
</>)

export default IconLink;
