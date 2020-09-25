import React from 'react';
import './App.css';



function App(){

  function addItem(){
    
    var input=document.getElementById('mojInput').value;
    if (input)
    {


    var list1 = document.querySelector("#list1")

    var li = document.createElement("li");
    var tekst = document.createTextNode(input);
    

    li.appendChild(tekst);
    
    list1.appendChild(li);
    document.getElementById('mojInput').value="";
    }

  };  

  
  

    return (
      
      <div className="App" >
        <a href="https://github.com/michalm08/todoSource.git" id="source">Github</a>  
        <h1>TODO List </h1>
        
        
        <input id="mojInput"/>
        <button onClick={addItem} className="btn"> Dodaj</button>


        <ul id="list1">

        </ul>
      </div>
    );
  

}
export default App;
