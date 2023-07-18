import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import node from "../assets/icons/node.svg";
import typescript from "../assets/icons/typescript.svg";
import socket from "../assets/icons/socket.svg";
import postgresql from "../assets/icons/postgresql.svg";
import jest from "../assets/icons/jest.svg";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const skills = [
    {
      title: "NodeJs",
      image: node,
      alt: "Ícone verde do NodeJs",
    },
    {
      title: "TypeScript",
      image: typescript,
      alt: "Ícone com fundo azul e duas letras TS que representam o Typescript",
    },
    {
      title: "WebSockets",
      image: socket,
      alt: "Ícone do Socket IO na cor preta com um símbolo de raio no centro",
    },
    {
      title: "PostgreSQL",
      image: postgresql,
      alt: "Ícone do Postgresql com o rosto de um elefante no fundo na cor aazul, o nome Postgres embaixo do rosto na cor preta seguida do nome SQL na cor azul",
    },
    {
      title: "Jest",
      image: jest,
      alt: "Ícone laranja de uma calçado de palhaço com o fundo branco",
    },
  ];

  return (
    <section className="knowledge-container container-margin-bottom padding-left-right">
      <div className="bar margin-bottom">
        <h2 className="title">Conhecimentos</h2>
        <p className="text">
          Dá só uma olhadinha em tecnologias em coisas que eu já domino.
        </p>
      </div>
      <div className="knowledge-group">
        <Slider {...settings}>
          {skills?.map((skill, index) => (
            <div key={index}>
              <div className="item">
                <img
                  src={skill.image}
                  alt={skill.alt}
                  className="knowledge-image"
                />
                <h2 className="knowledge-name">{skill.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
