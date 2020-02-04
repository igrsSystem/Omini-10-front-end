import React , {useState, useEffect} from  'react';
import api from '../../services/api'

function DevItem({dev}){
const [reload , setReaload] = useState('')

 async function deleteDev(){
    console.log(dev._id)
    const resul = await api.delete(`/devs/${dev._id}`);
    console.log(resul.data.msg);
    
  }

 
  return(
    <li  className='dev-item'>
    <header>
       <img src={ dev.avatar_url } alt={ dev.name } ></img>
       <div className="user-info">
            <strong>{ dev.name }</strong>
            <span>{dev.techs.join(',')}</span>
            <button type="submit" onClick={deleteDev} >Deletar</button>
       </div>
   </header>
   <p>{dev.bio}</p>
   <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Git</a>
</li>
  )
}

export default DevItem