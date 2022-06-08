import { useContext } from "react";
import {UserContext} from '../App';

export function Technologies ( ){
    //const {technology} = useContext(UserContext); 
    const { technology } = useContext(UserContext);
    //console.log(technology);

    return(
        //<div className="tech-container">
            <span className="techs" id="techs">
                {technology.tech}
            </span>
            
        //</div>
    )
}