import { Fragment, useContext, useEffect, useState } from "react";
import "../styles/project.css";
import bank2gama from "../assets/images/bank2gama.png";
import nerdjay from "../assets/images/nerdjay.png";
import createAccount from "../assets/images/projects/create-account.png";
import nerdjayEletronics1 from "../assets/images/projects/nerdjay-eletronics-1.png";
import nerdjayEletronics2 from "../assets/images/projects/nerdjay-eletronics-2.png";
import nerdjayEletronics3 from "../assets/images/projects/nerdjay-eletronics-3.png";
import registrationSystemBanner from "../assets/images/registration-system-banner.png";
import registrationSystem1 from "../assets/images/projects/registration-system-1.png";
import registrationSystem2 from "../assets/images/projects/registration-system-2.png";
import registrationSystem3 from "../assets/images/projects/registration-system-3.png";
import schedule1 from "../assets/images/projects/schedule-1.png";
import schedule2 from "../assets/images/projects/schedule-2.png";
import schedule3 from "../assets/images/projects/schedule-3.png";
import schedule4 from "../assets/images/projects/schedule-4.png";

const Project = () => {
    const [project, setProject] = useState({});

    const projectsDetails = [
        {
            id: 1,
            title: "Bank2Gama",
            text: `Criamos o banco que simplifica a vida das pessoas: simplificar é tirar as burocracias da frente e conectar as soluções que a sua vida precisa em um só lugar.
      Zero mensalidade.
      Zero travamentos ou bloqueios da conta. Cuidamos da burocracia para você
      Abra agora a sua conta e venha fazer parte desse movimento,`,
            references: [
                "MVC",
                "NodeJS",
                "Express",
                "VueJS",
                "Swagger",
                "MySQL",
            ],
            link: "https://github.com/GRUPO02-GAMA/Bank2Gama",
            banner: bank2gama,
            images: [createAccount],
        },
        {
            id: 2,
            title: "Nerdjay Eletrônicos",
            text: `Esta é a loja de eletrônicos mais insana do Brasil.
      Apaixonados e apaixonadas por tecnologia digital, aqui brincamos com a maior variedade possíveis de eletrônicos.
      Quer sarvar muitos dados? Temos HDs excelentes. Quer velocidade na sua máquina?
    Que tal uma combinação de SSD, RAM e placa de vídeo? O Flash vai ficar com inveaja do seu PC.`,
            references: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/Jayneanderson/nerdjay",
            banner: nerdjay,
            images: [
                nerdjayEletronics1,
                nerdjayEletronics2,
                nerdjayEletronics3,
            ],
        },
        {
            id: 3,
            title: "Sistema de Matrículas",
            text: `"Queria uma aplicação rápida para cadastrar um banco de talentos".
      Use esta aplicação para cadastro básico e rápido de futuras pessoas colaboradoras.
      Essa aplicação tem muito o que evoluir, mas o básico de cadastro é possível realizar com ela·
      `,
            references: ["JavaScript", "HTML", "CSS", "Local Storage"],
            link: "https://github.com/GRUPO02-GAMA/matriculas",
            banner: registrationSystemBanner,
            images: [
                registrationSystem1,
                registrationSystem2,
                registrationSystem3,
            ],
        },
        {
            id: 4,
            title: "Agenda de Contatos",
            text: `Quer salvar aquele contatinho? Aquele e-mail de uma pessoa que 
            você viu de uma empresa? Centralizar as pessoas que você mais tem contato?
            Então esse projeto é sua cara. Aqui você pode salvar rapidamente os contatos
            que você deseja enviar um e-mail mais tarde.`,
            references: ["MVC", "NodeJS", "Express", "MySQL"],
            link: "https://github.com/GRUPO02-GAMA/express-crud",
            banner: schedule1,
            images: [schedule2, schedule3, schedule4],
        },
    ];

    const handleProject = () => {
        const url = document.URL;
        const param = parseInt(url.substring(url.lastIndexOf("/") + 1));
        const foundProject = projectsDetails.find((p) => p.id === param);
        setProject(foundProject);
    };

    useEffect(() => {
        handleProject();
    }, []);

    return (
        <Fragment>
            <div
                class="project-background padding"
                style={{
                    background: `, url("${project?.banner}") no-repeat`,
                    backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url(${project?.banner})`,
                    //backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url("./assets/images/project.jpg") no-repeat`,
                }}
            >
                <div class="project-container">
                    <div class="project-group">
                        <div class="project-group-left">
                            <h1 class="title">{project?.title}</h1>
                            <p class="text"> {project?.text}</p>
                        </div>

                        <div class="project-group-references">
                            {project.references?.map((r, index) => {
                                return (
                                    <a
                                        key={index}
                                        class="project-group-reference-link"
                                        href=""
                                    >
                                        <span class="project-group-reference">
                                            {r}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                        <div class="project-group-button">
                            <a
                                href={project?.link}
                                class="social-media-group button"
                            >
                                <svg
                                    class="social-media-icon"
                                    width="44"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M21 5.958C21.009 6.565 20.933 7.326 20.866 7.881C20.8448 8.06435 20.8114 8.24608 20.766 8.425C21.622 10.01 22 11.917 22 14C22 16.468 20.813 18.501 18.964 19.887C17.132 21.26 14.66 22 12 22C9.34 22 6.868 21.26 5.036 19.887C3.187 18.501 2 16.468 2 14C2 11.917 2.377 10.01 3.235 8.425C3.18965 8.24608 3.15625 8.06435 3.135 7.881C3.066 7.326 2.99 6.565 3 5.958C3.01 5.275 3.1 4.592 3.199 3.914C3.245 3.6 3.317 3.305 3.658 3.119C4.006 2.929 4.372 2.999 4.733 3.102C5.951 3.447 7.093 3.932 8.167 4.512C9.3 4.173 10.578 4 12 4C13.422 4 14.7 4.173 15.832 4.513C16.9211 3.9176 18.0728 3.44472 19.266 3.103C19.627 3 19.994 2.929 20.341 3.119C20.681 3.305 20.754 3.6 20.801 3.914C20.899 4.592 20.99 5.275 21 5.958ZM20 14C20 12.313 19.612 10 17.5 10C16.548 10 15.647 10.25 14.747 10.5C13.848 10.75 12.95 11 12 11C11.05 11 10.152 10.75 9.253 10.5C8.353 10.25 7.453 10 6.5 10C4.394 10 4 12.32 4 14C4 15.764 4.827 17.231 6.236 18.287C7.66 19.356 9.69 20 12 20C14.31 20 16.339 19.355 17.764 18.287C19.173 17.23 20 15.764 20 14ZM10 14.5C10 15.88 9.328 17 8.5 17C7.672 17 7 15.88 7 14.5C7 13.12 7.672 12 8.5 12C9.328 12 10 13.12 10 14.5ZM15.5 17C16.328 17 17 15.88 17 14.5C17 13.12 16.328 12 15.5 12C14.672 12 14 13.12 14 14.5C14 15.88 14.672 17 15.5 17Z"
                                        fill="black"
                                    />
                                </svg>
                                <span class="social-media-name">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-gallery padding">
                <ul class="card-list">
                    {project.images?.map((img, index) => {
                        return (
                            <li key={index} class="card-list-item">
                                <img class="card-image" src={img} alt="" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default Project;
