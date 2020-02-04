import React, { useState ,useEffect } from 'react';
import api from './services/api'
import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'


import './Global.css'
import './App.css'
import './Sidbar.css'
import './Main.css'


function App() {
  const  [ devs , setDevs] = useState([]);
  
  async function handleAddDev(data){
   
   const reponse = await api.post('/devs', data) 
  
   setDevs([...devs, reponse.data]);

  }
 
  async function loadDevs(){
      const response = await api.get('/users');
      setDevs(response.data);
  }

  useEffect(() => {
    loadDevs();
  },[])
    
  return (
   <div id='app' >
      <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          { devs.map(dev => (
              <DevItem key={dev._id} dev={dev}/>
          ))}
         
        </ul>
          
      </main>
   </div>
  );
}
 
export default App;
