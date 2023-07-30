import { handleClick } from "./Header";

const Banner = () => {
    return (
        <section className="presentation-container padding-left-right">
            <div className="presentation-group">
                <div className="presentation-group-text">
                    <p className="presentation-hi">
                        <strong>Oi, me chamo</strong>
                    </p>
                    <h1 className="presentation-name">Jayneanderson</h1>
                </div>
                <div className="presentation-group-list-container">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a className="list-group-item-link">
                                Desenvolvedor Back-end
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a className="list-group-item-link">
                                Desenvolvedor Front-end
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="list-group-item-link">
                                Analista de Suporte
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group-buttons">
                    <a
                        href="#contatc"
                        className="button contact"
                        onClick={handleClick}
                    >
                        Contato
                    </a>
                    <a href="#" className="button download">
                        Baixar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
