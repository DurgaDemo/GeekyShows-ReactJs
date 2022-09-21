// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Functional from './components/Functional';
// import Class from "./components/Class";
// import  Childrenjsx  from "./components/Childrenjsx";


// import Function from "./props/Function";
//  import Class from "./props/Class";


// import Class from './TypeChecking/Class'


import Class from './state/Class'
function App() {
  return (
    <div className="App">

      <div>
        {/* <Functional name="Durga Mohapatra" age={30}/> */}
        {/* <Class name="Durga Mohapatra" age={30} /> */}
        {/* <Childrenjsx>I am Durga</Childrenjsx> */}
      </div>
      
      <div>
        {/* <Function name="Durga Mohapatra" Empno={1033453}/> */}
        {/* <Class name="Durga Mohapatra" Empno={1033453}  /> */}
      </div>

      <div>
       {/* <Class name="Durga Mohapatra" rollno="1033453"/> */}
       {/* <Class rollno={1033453}/> */}
      </div>
       
       <div>
        <Class/>
       </div>
    </div>
  );
}

export default App;
