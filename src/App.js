

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [time , setTime] = useState({

  })
  let arr = [];

  for(let i =1 ; i <=12 ; i++){

    arr.push(i)
  }

  function getTime(){

  let date = new Date();

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds()

    // console.log(hours , minutes , seconds , date);
    

    setTime({hours , minutes , seconds})

    

  }

  

  useEffect(()=>{

    let id = setInterval(getTime , 1000)


  return ()=> {clearInterval(id)

    console.log("interval cleared");
    
  }

  },[])


  
  
  return (
    <div className="App" style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh"}}>

      <div style={{height:"200px", width:"200px" , borderRadius:"50%" , border: "2px solid black" , display:"flex" , gap:"10px"  , background:"red" , position:"relative"}}> 

      <div style={{
        position: 'absolute',
        height: "40px",
        width: "40px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* Hour Hand */}
        <div style={{
          height: "20px",
          top:"15px",
          width: "2px",
          background: "green",
          transform: `rotate(${time.hours * 30}deg)`,
          transformOrigin: "bottom center",
          position: "absolute"
        }}></div>

        {/* Minute Hand */}
        <div style={{
          height: "30px",
          width: "2px",
          background: "green",
          transform: `rotate(${(time.minutes / 5) * 30}deg)`,
          transformOrigin: "bottom center",
          position: "absolute"
        }}></div>

        {/* Second Hand */}
        <div style={{
          height: "30px",
          width: "1px",
          background: "green",
          transform: `rotate(${(time.seconds / 5) * 30}deg)`,
          transformOrigin: "bottom center",
          position: "absolute"
        }}></div>
      </div>

          {arr.map(elem=>(
            <div style={{  height:"20px" ,
              width:"20px",
              // border:"1px solid green" ,
              transform: `rotate(${elem * 30 }deg )  translateY(-90px)` , 
              transformOrigin:"center center",
              position:"absolute",
              top:"45%",
              left:"45%",
              background:"white"
            }}> {elem}</div>
          ))}

      </div>
      
    </div>
  );
}

export default App;
