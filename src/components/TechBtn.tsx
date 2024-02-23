interface TechBtnInterface {
    icon: string;
    title: string;
    onClick: (params: string) => void;
}

const TechBtn = ({icon, title, onClick: handleClick}: TechBtnInterface) => {
    return <button className={'hover:bg-dark/75 flex gap-2 justify-between px-2 py-1'}
                   onClick={() => handleClick(title)}>
        {icon && <i className={icon}></i>}
        <p className={""}>{title}</p>
    </button>
}

export default TechBtn;
