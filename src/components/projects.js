import airboss from '../images/airboss.webp'
import calculator from '../images/calculator.webp'
import iptracker from '../images/iptracker.webp'
import ecommerce from '../images/ecommerce.webp'
import mytreyo from '../images/my-treyo.webp'
import guesstheword from '../images/guess-the-word.webp'
import airbossM from '../images/airboss.25.webp'
import calculatorM from '../images/calculator.25.webp'
import iptrackerM from '../images/iptracker.25.webp'
import ecommerceM from '../images/ecommerce.25.webp'
import mytreyoM from '../images/my-treyo.25.webp'
import guessthewordM from '../images/guess-the-word.25.webp'


function Projects (){

    const projects = [
        {name: 'Airboss',
         description: 'Portal de reserva vuelos',
         url: 'https://airboss.maperez.dev',
         github: 'https://github.com/maperezromero/airboss_HAB',
         techs: ['react','node','mysql','Google API', 'Paypal API','material ui', 'api'],
         image: airboss,
         imageM: airbossM
        },
        {name: 'Calculator',
         description: 'Basic Calculator',
         url: 'https://calculator.maperez.dev',
         github: 'https://github.com/maperezromero/calculator-app',
         techs: ['react','css'],
         image: calculator,
         imageM: calculatorM
        },
        {name: 'Ip Address Tracker',
         description: 'A basic ip address tracker',
         url: 'https://ipaddresstracker.maperez.dev',
         github: 'https://github.com/maperezromero/ip-address-tracker',
         techs: ['react','css', 'api'],
         image: iptracker,
         imageM: iptrackerM
        },
        {name: 'eCommerce',
        description: 'Ecommerce portal example',
        url: 'https://ecommerce.maperez.dev',
        github: 'https://github.com/maperezromero/ecommercefront',
        techs: ['react','css'],
        image: ecommerce,
        imageM: ecommerceM
        },
        {name: 'My-Treyo',
        description: 'Basic to-do app',
        url: 'https://my-treyo.maperez.dev',
        github: 'https://github.com/maperezromero/my-treyo',
        techs: ['react','css'],
        image: mytreyo,
        imageM: mytreyoM
        },
        {name: 'guess-the-word',
        description: 'Wordle Clone app',
        url: 'https://guess-the-word.maperez.dev',
        github: 'https://github.com/maperezromero/guess-the-word',
        techs: ['react','css', 'apis'],
        image: guesstheword,
        imageM: guessthewordM
        },

    ]
    return(
        <div className="projects">
            
        {projects.map(( p , index )=>(
            
            <div key={index} className="project">
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {/* <img src={p.image} alt={p.name} className='project-image'></img> */}
                    <img 
                    className='project-image'
                    srcSet={`${p.imageM} 480w,
                            ${p.image} 800w`}
                    sizes="(max-width: 640px) 480px,
                            800px"
                    src={`${p.image}`}
                    alt={`${p.name}`}>
                </img>
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