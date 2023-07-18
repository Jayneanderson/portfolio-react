const Contact = () => {
    return (
        <section
            id="contatc"
            className="contact-container container-margin-bottom padding-left-right"
        >
            <div className="bar">
                <h2 className="title">Contato</h2>
                <p className="text">Vamos bater um papo</p>
            </div>
            <div className="contact-group">
                <div className="social-media-container">
                    <a
                        href="https://github.com/Jayneanderson"
                        className="social-media-group button"
                    >
                        <svg
                            className="social-media-icon"
                            width="44"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21 5.958C21.009 6.565 20.933 7.326 20.866 7.881C20.8448 8.06435 20.8114 8.24608 20.766 8.425C21.622 10.01 22 11.917 22 14C22 16.468 20.813 18.501 18.964 19.887C17.132 21.26 14.66 22 12 22C9.34 22 6.868 21.26 5.036 19.887C3.187 18.501 2 16.468 2 14C2 11.917 2.377 10.01 3.235 8.425C3.18965 8.24608 3.15625 8.06435 3.135 7.881C3.066 7.326 2.99 6.565 3 5.958C3.01 5.275 3.1 4.592 3.199 3.914C3.245 3.6 3.317 3.305 3.658 3.119C4.006 2.929 4.372 2.999 4.733 3.102C5.951 3.447 7.093 3.932 8.167 4.512C9.3 4.173 10.578 4 12 4C13.422 4 14.7 4.173 15.832 4.513C16.9211 3.9176 18.0728 3.44472 19.266 3.103C19.627 3 19.994 2.929 20.341 3.119C20.681 3.305 20.754 3.6 20.801 3.914C20.899 4.592 20.99 5.275 21 5.958ZM20 14C20 12.313 19.612 10 17.5 10C16.548 10 15.647 10.25 14.747 10.5C13.848 10.75 12.95 11 12 11C11.05 11 10.152 10.75 9.253 10.5C8.353 10.25 7.453 10 6.5 10C4.394 10 4 12.32 4 14C4 15.764 4.827 17.231 6.236 18.287C7.66 19.356 9.69 20 12 20C14.31 20 16.339 19.355 17.764 18.287C19.173 17.23 20 15.764 20 14ZM10 14.5C10 15.88 9.328 17 8.5 17C7.672 17 7 15.88 7 14.5C7 13.12 7.672 12 8.5 12C9.328 12 10 13.12 10 14.5ZM15.5 17C16.328 17 17 15.88 17 14.5C17 13.12 16.328 12 15.5 12C14.672 12 14 13.12 14 14.5C14 15.88 14.672 17 15.5 17Z"
                                fill="black"
                            />
                        </svg>
                        <span className="social-media-name">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jayneandersonn/"
                        className="social-media-group button"
                    >
                        <svg
                            className="social-media-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H18C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18V6C22 4.93913 21.5786 3.92172 20.8284 3.17157C20.0783 2.42143 19.0609 2 18 2H6ZM4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6ZM9 11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17V11ZM9.5 7.5C9.5 7.89782 9.34196 8.27936 9.06066 8.56066C8.77936 8.84196 8.39782 9 8 9C7.60218 9 7.22064 8.84196 6.93934 8.56066C6.65804 8.27936 6.5 7.89782 6.5 7.5C6.5 7.10218 6.65804 6.72064 6.93934 6.43934C7.22064 6.15804 7.60218 6 8 6C8.39782 6 8.77936 6.15804 9.06066 6.43934C9.34196 6.72064 9.5 7.10218 9.5 7.5V7.5ZM12 10C12.34 10 12.64 10.17 12.82 10.428C13.3354 10.1471 13.913 9.99995 14.5 10C16.66 10 18 11.926 18 13.571V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V13.57C16 12.802 15.34 11.999 14.5 11.999C13.976 11.999 13.397 12.284 13 12.962V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10V10Z"
                                fill="black"
                            />
                        </svg>

                        <span className="social-media-name">Linkedin</span>
                    </a>
                    <a
                        href="https://www.instagram.com/jayneandersonn/"
                        className="social-media-group button"
                    >
                        <svg
                            className="social-media-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12V12ZM17.5 8C17.8978 8 18.2794 7.84196 18.5607 7.56066C18.842 7.27936 19 6.89782 19 6.5C19 6.10218 18.842 5.72064 18.5607 5.43934C18.2794 5.15804 17.8978 5 17.5 5C17.1022 5 16.7206 5.15804 16.4393 5.43934C16.158 5.72064 16 6.10218 16 6.5C16 6.89782 16.158 7.27936 16.4393 7.56066C16.7206 7.84196 17.1022 8 17.5 8Z"
                                fill="black"
                            />
                        </svg>

                        <span className="social-media-name">Instagram</span>
                    </a>
                    <a
                        id="email"
                        href="mailto:jayneandersonn@gmail.com"
                        className="social-media-group button"
                    >
                        <svg
                            className="social-media-icon"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_11_7)">
                                <path
                                    d="M26.6667 5.33334H5.33335C3.86669 5.33334 2.68002 6.53334 2.68002 8.00001L2.66669 24C2.66669 25.4667 3.86669 26.6667 5.33335 26.6667H26.6667C28.1334 26.6667 29.3334 25.4667 29.3334 24V8.00001C29.3334 6.53334 28.1334 5.33334 26.6667 5.33334ZM26.6667 10.6667L16 17.3333L5.33335 10.6667V8.00001L16 14.6667L26.6667 8.00001V10.6667Z"
                                    fill="#fd5c55"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_7">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="social-media-name">
                            jayneandersonn@gmail.com
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
