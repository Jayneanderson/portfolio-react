import { handleClick } from "./Header";

const HeaderResponsive = () => {
    return (
        <>
            <input type="checkbox" name="" id="menuButton" />

            <label id="labelButton" for="menuButton">
                <span id="menu" className="menu-button">
                    ☰
                </span>
                <span id="cancel" className="menu-button">
                    X
                </span>
            </label>
            <div className="container-responsive">
                <nav id="navResponsive" className="nav">
                    <a href="#" id="" className="logo">
                        .JSantos
                    </a>
                    <ul className="list-group">
                        <li className=" button list-group-item">
                            <a className="list-group-link" href="/">
                                Home
                            </a>
                        </li>
                        <li
                            className=" button list-group-item"
                            onClick={handleClick}
                        >
                            <a className="list-group-link" href="#about">
                                Sobre
                            </a>
                        </li>
                        <li
                            className=" button list-group-item"
                            onClick={handleClick}
                        >
                            <a className="list-group-link" href="#projects">
                                Projetos
                            </a>
                        </li>
                        <li className=" button list-group-item">
                            <a
                                className="list-group-link"
                                href="#contatc"
                                onClick={handleClick}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HeaderResponsive;
