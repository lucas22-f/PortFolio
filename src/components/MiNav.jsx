import "../styles/MiNav.css"
function MiNav() {


    return (
        <nav className='nav1'>
            <div className='navt'><h1><a href="#">Lucas</a> </h1></div>
            <ul>
                <li><a href="#">Me</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className='socials'>
                <a href="https://github.com/lucas22-f"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/lucas-figueroa-3b5743226/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/lucas.figueroa22/?theme=dark"><i class="fa-brands fa-instagram"></i></a>
            </div>

        </nav>
    )
}

export default MiNav