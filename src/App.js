
import './App.css';
import Example from './components/Example';
import style from '../src/myStyle.module.css'
import User from './components/User';
import Random from './components/Random';
import Sample from './components/Sample';
import Table from './components/Table';

function App() {
  //js code
  const subject = 'REACT'
  const h1style ={backgroundColor:'yellow',fontSize:'50px'} 
  const data = "hello all" 
  const username = 'maxwell'
  const age = 27
  return (
    //jsx code
    <div>
     <h1 style={h1style}>Welcome to React Application</h1>
     <h3 style={{color:'red'}}>My First Program</h3>
     <h5>Technology Used is {subject}</h5>
     <h6 className={style.reactsubject}>Types of Component</h6>
     <ul>
      <li><Example d={data}/></li>
      <li><User d={username} a={age}/></li>
      <li><Random sub={subject}/></li>
     </ul>
      <Sample/>
      <Table/>
    </div>
    
  );
}

export default App;
