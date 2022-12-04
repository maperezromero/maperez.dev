import profilePicture from '../images/perfil.webp'
import github from '../images/github.webp'
import linkedin from '../images/linkedin_b.webp'
import logo from '../images/1.webp'
import logoM from '../images/1.25.webp'
import { Technologies } from './Technologies'
function Header (){
return(
    <div className="header">

        <div className='icons-container'>
            <span className='logo-container'>
                <img 
                    /* src={logo} 
                    alt="maperez.dev logo" 
                    className='logo'> */
                    className='logo'
                    srcSet={`${logoM} 480w,
                            ${logo} 800w`}
                    sizes="(max-width: 600px) 480px,
                            800px"
                    src="../images/1.webp"
                    alt="maperez.dev logo">
                </img>
            </span>
            <span className='RRSS-container'>
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
                Soy full stack developer, apasionado de la tecnología y el aprendizaje continuo 
                como forma de vida y amante de la naturaleza.
            </h2>
            <Technologies/>
        </div>

    </div>
)
}

export default Header;