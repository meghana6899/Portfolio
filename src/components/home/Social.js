import React from "react";


const Social = () => {
    return (
       <div className="home__social">
        <a className="home__social-icon" href="https://github.com/meghana6899" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        <a className="home__social-icon" href="https://www.linkedin.com/in/sai-meghana-vemula/" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

        <a title="vemulasaimeghana@gmail.com" href="mailto:vemulasaimeghana@gmail.com" className="home__social-icon" ><i className="bx bx-mail-send"></i></a>

        {/* <a className="home__social-icon" target="_blank"></a> */}
        </div>

    )
}

export default Social;