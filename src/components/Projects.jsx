import { Fragment } from "react";
import { Link } from "react-router-dom";
import project from "../assets/images/project.jpg";
import javascript from "../assets/icons/javascript.svg";
import node from "../assets/icons/node.svg";
import vue from "../assets/icons/vue.svg";
import mysql from "../assets/icons/mysql.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.png";
import bank2gama from "../assets/images/bank2gama-project.png";
import nerdjay from "../assets/images/nerdjay.png";
import registrationSystemProject from "../assets/images/registration-system-project.png";
import agenda from "../assets/images/agenda1.png";

const projects = [
    {
        id: 1,
        name: "Bank2Gama",
        description: "Site e API de um banco digital",
        image: bank2gama,
        icons: [javascript, node, vue, html, css],
    },
    {
        id: 2,
        name: "Nerjay - Eletrônicos",
        description: "Sistema de produtos eletrônicos",
        image: nerdjay,
        icons: [javascript, html, css],
    },
    {
        id: 3,
        name: "Sistema de Matrículas",
        description: "CRUD utilizando Local Storage",
        image: registrationSystemProject,
        icons: [javascript, html, css],
    },
    {
        id: 4,
        name: "Agenda de Contatos",
        description: "Agenda para salvar e-mails",
        image: agenda,
        icons: [javascript, node, html, css, mysql],
    },
];

const Projects = () => {
    const handleClick = (event) => {
        const id = event.target.id;
    };

    return (
        <>
            <section
                projects={projects}
                id="projects"
                className="projects-container container-margin-bottom padding-left-right"
            >
                <div className="bar">
                    <h2 className="title">Projetos</h2>
                    <p className="text">
                        Que tal ver alguns dos projetos que já atuei?
                    </p>
                </div>
                <div className="card-container">
                    <div className="card-group">
                        <ul className="card-list">
                            {projects?.map((project, index) => {
                                const { id, name, description, image, icons } =
                                    project;
                                return (
                                    <li key={index} className="card-list-item">
                                        <img
                                            className="card-image"
                                            src={image}
                                            alt=""
                                        />
                                        <div className="card-wrapper">
                                            <div className="card-details">
                                                <div className="card-text-group">
                                                    <h3 className="card-title">
                                                        {name}
                                                    </h3>
                                                    <p className="card-description">
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-icons">
                                                {icons?.map((icon, i) => {
                                                    return (
                                                        <img
                                                            key={i}
                                                            className="card-icon"
                                                            src={icon}
                                                            alt=""
                                                        />
                                                    );
                                                })}
                                            </div>

                                            <div className="card-more">
                                                <Link
                                                    className="card-link"
                                                    to={`/projects/${id}`}
                                                    onClick={handleClick}
                                                >
                                                    <div className="card-link-details">
                                                        <span
                                                            id={id}
                                                            className="card-more-text"
                                                        >
                                                            Veja mais
                                                        </span>
                                                        <svg
                                                            className="card-link-image"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="#DBDBDB"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_8_2)">
                                                                <path
                                                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                                                    fill="#DBDBDB"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_8_2">
                                                                    <rect
                                                                        width="24"
                                                                        height="24"
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
