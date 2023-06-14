import Player from './Player';

import '../Assets/Styles/main.css'

const Main = ()=> {
    return(
        <div className="main">
            <Player/>
        </div>
    )
};

export default Main;




















// import { useEffect, useState,  } from "react";
// import ShowValue from "./ShowValue";
// const ValueContext = createContext()

// const Main = ()=>{

//     const [increase,setIncrease] = useState(0);

//     useEffect(()=>{
//         console.log("useEffect! , componentDidUpdate");
//     },[increase])

//     return (
//       <div className="Main">
//         <h3>Main Component</h3>
//         <ValueContext.Provider value={increase}>
//             <button onClick={()=>(setIncrease((increase)=>(increase+1)))}>plus</button>
//             <ShowValue/>
//         </ValueContext.Provider>
//       </div>
//     );
//   }


//   const ShowValue = ()=>{

//     const value = useContext(ValueContext)
//     return (
//         <div>
//             <h3>Show Vlue Component</h3>
//             <p>{value}</p>
//         </div>
//     )
//   }
  
//   export default Main;



//   useEffect(()=>{
//         setIncrease((increase)=>(increase+1))
//         console.log("useEffect! , componentDidMount");  
//     },[]);

//     useEffect(()=>{
//         let timer = setTimeout(()=>{
//             setIncrease((increase)=>(increase+1));
//              console.log("useEffect! , componentWillUnmount");
//         },1000);

//         return ()=>clearTimeout(timer);
//     },[])
  