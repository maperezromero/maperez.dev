import airboss from '../images/airboss.png'
import calculator from '../images/calculator.png'
import iptracker from '../images/iptracker.png'
import ecommerce from '../images/ecommerce.png'


function Projects (){

    const projects = [
        {name: 'Airboss',
         description: 'Portal de reserva vuelos',
         url: 'https://airboss.maperez.dev',
         github: 'https://github.com/maperezromero/airboss_HAB',
         techs: ['react','node','mysql','Google login', 'material ui', 'api'],
         image: airboss
        },
        {name: 'Calculator',
         description: 'Basic Calculator',
         url: 'https://calculator.maperez.dev',
         github: 'https://github.com/maperezromero/calculator-app',
         techs: ['react','css'],
         image: calculator
        },
        {name: 'Ip Address Tracker',
         description: 'A basic ip address tracker',
         url: 'https://ipaddresstracker.maperez.dev',
         github: 'https://github.com/maperezromero/ip-address-tracker',
         techs: ['react','css', 'api'],
         image: iptracker
        },
        {name: 'eCommerce',
        description: 'Ecommerce portal example',
        url: 'https://eccomerce.maperez.dev',
        github: 'https://github.com/maperezromero/ecommercefront',
        techs: ['react','css'],
        image: ecommerce
        },
    ]
    return(
        <div className="projects">
        {projects.map(( p , index )=>(
            <div key={index} className="project">
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <img src={p.image} alt={p.name} className='project-image'></img>
                </a>
               <div className='tech-container'>
                    {p.techs.map((tech, index)=>(
                        <div key={index} className="tech">{tech}</div>
                    ))}

               </div>
            </div>
        ))}
        </div>
    )
}

export default Projects;