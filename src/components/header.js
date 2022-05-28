import profilePicture from '../images/perfil.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin_b.png'
import logo from '../images/1.png'
function Header (){
return(
    <div className="header">
        <span className='logo-container'>
                <img src={logo} alt="maperez.dev logo" className='logo'></img>
            
        </span>  

        <div className='icons-container'>
            <span className='icon-container'>
                <a href="https://github.com/maperezromero"  target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className='icon'></img>
                </a>
            </span>  
            <span className='icon-container'>
                <a href="https://www.linkedin.com/in/miguelangelperezromero/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" className='icon'></img>
                </a>
            </span>  
        </div>
        <div className="perfil-container">
            <img src={profilePicture} alt="Mi foto de perfil" className='perfil'></img>
        </div>
        <div className='about'>
            <h3>
                Hola! Soy 
            </h3>
            <h1>
                Miguel Ángel Pérez
            </h1>
            <h2>
                Soy full stack developer, actualmente trabajo con React, 
                Node y Mysql/MongoDB. Apasionado de la tecnología y amante 
                de la naturaleza y el aprendizaje continuo como forma de vida.
            </h2>
        </div>

    </div>
)
}

export default Header;