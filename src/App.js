import Header from './components/header';
import Projects from './components/projects';
import './App.css';
import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();
function App() {
  const [technology, setTechnology] = useState({
    tech:'React',
    index:0
  });

  const technologies =[
   
    'Node',
    'API',
    'TypeScript',
    'Mysql',
    'JavaScript',
    'Responsive Design',
    'MongoDB',
    'React'
  ]

  useEffect(()=>{
   /*  const timer = setTimeout(() => {
      if(technology.index === technologies.length-1){        
        setTechnology({...technology, tech:technologies[technology.index], index: 0})
      }else{
        setTechnology({...technology, tech:technologies[technology.index], index: technology.index+1})
      }
    }, 3000); */
    //return ()=> {clearTimeout(timer)}
    let element = document.getElementById('techs');
    element.addEventListener('animationiteration', (ev) => {
      if(technology.index === technologies.length-1){        
        setTechnology({...technology, tech:technologies[technology.index], index: 0})
      }else{
        setTechnology({...technology, tech:technologies[technology.index], index: technology.index+1})
      }
    });

  },)
 
  return (
    <UserContext.Provider value={{technology}}>
      <div className="App">
        <Header/>
        <h1>Proyectos</h1>
        <Projects/>  
      </div>
    </UserContext.Provider>
  );
}

export default App;
