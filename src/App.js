// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Functional from './components/Functional';
// import Class from "./components/Class";
// import  Childrenjsx  from "./components/Childrenjsx";


// import Function from "./props/Function";
//  import Class from "./props/Class";


// import Class from './TypeChecking/Class'


// import Class from './state/Class'
// import Setstate from './state/Setstate'


// import Class from'./eventhandling/Class'
// import Function from'./eventhandling/Function'   
// import Event from './eventhandling/Event'

// import Usestate from './hooks/Usestate'
// import Useeffect from './hooks/Useeffect'
 
// import Entry from "./conditional/Entry";

// import Inline from './css/Inline'
// import Inline1 from "./css/Inline1";
// import External from './css/External'
   import Module from "./css/Module";

// import List from './list/List'
// import List1 from './list/List1'
// import Function from './list/Function'
//  import Props from './list/Props'
// import State from './list/State'
 
// import Class from './keys/Class'


function App() {
  // const arr=[1,2,3,4]
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
        {/* <Class/> */}
        {/* <Setstate roll={1033453} roll1={134}/> */}
       </div>

         <div>
          
          {/* <Class roll={1033453}/> */}
          {/* <Function/> */}
          {/* <Event/> */}
         </div>
          
          <div>
            {/* <Usestate/> */}
            {/* <Useeffect/> */}
          </div>

          {/* <Entry consumer={false}/> */}

         <div>
         {/* <Inline/> */}
         {/* <Inline1/> */}
         {/* <External/> */}
          <Module/>
         </div>
         
          <div>
          {/* <List/> */}
         {/* <List1/> */}
         {/* <Function/> */}
         {/* <Props numbers={arr}/> */}
         {/* <State/> */}
          </div>  
            
            {/* <Class/> */}


         

    </div>
  );
}

export default App;
