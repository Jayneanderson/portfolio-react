export const handleClick = (event) => {
    //retira o comportamento padrão de um evento, neste caso, do click
    event.preventDefault();
    //pega o elemento que estou clicando
    const item = event.target;
    //especifica que só quero o atributo href dele
    const id = item.getAttribute("href");
    //agora eu já posso dizer qual local eu quero que vá
    const goTo = document.querySelector(id).offsetTop;
    //agora eu quero saber onde está exatamente minha seção (o item) na tela
    //no caso, a função pffsetTop pega a distancia do link para o alvo em pixels
    //note que eu coloquei tudo em uma linha acima, por isso abaixo está comentado

    //isso foi transformado em objeto para usar mais propriedades
    /*window.scroll({
           top: goTo,
          behavior: "smooth", 
      });*/
    smoothScrollTo(0, goTo, 500);
};

export const smoothScrollTo = (endX, endY, duration) => {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};

const Header = () => {
    return (
        <header className="header" id="start">
            <div className="content">
                <a href="/" className="logo">
                    .JSantos
                </a>
                <nav className="nav">
                    <ul className="list-group">
                        <li className=" button list-group-item">
                            <div className="bar">
                                <a className="list-group-link" href="/">
                                    Home
                                </a>
                            </div>
                        </li>
                        <li
                            className=" button list-group-item"
                            onClick={handleClick}
                        >
                            <div className="bar">
                                <a className="list-group-link" href="#about">
                                    Sobre
                                </a>
                            </div>
                        </li>
                        <li
                            className=" button list-group-item"
                            onClick={handleClick}
                        >
                            <div className="bar">
                                <a className="list-group-link" href="#projects">
                                    Projetos
                                </a>
                            </div>
                        </li>
                        <li className=" button list-group-item">
                            <div className="bar">
                                <a
                                    className="list-group-link"
                                    href="#contatc"
                                    onClick={handleClick}
                                >
                                    Contato
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <a href="#" id="home-responsivo">
                .JSantos
            </a>
        </header>
    );
};

export default Header;
