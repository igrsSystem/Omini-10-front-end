import React ,{ useState, useEffect }from 'react';




function DevForm({onSubmit}){

  
  const  [latitude , setLatitude] = useState('');
  const  [longitude , setLongitude] = useState('');
  const  [github_username , setGithub_username ] = useState('');
  const  [techs , setTechs] = useState('');
  
  function getLocation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude , longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }


  useEffect(()=>{
    getLocation()
  },[]);

  async function handleSubmit(e){
    e.preventDefault()
    await onSubmit(
        {
          github_username,
          techs,
          latitude,
          longitude
      
         }
      );
      setGithub_username('')
      setTechs('');
  }

  return(
    <form onSubmit={handleSubmit}>
    <div className='input-block'>
      <label htmlFor='github_username'>Usuário do Github</label>
      <input type="text" name='github_username' onChange={e => setGithub_username( e.target.value )} id='username_github'></input>
    </div>
    
    <div className='input-block'>
      <label htmlFor='techs'>Tecnologias</label>
      <input type="text" name='techs' onChange={e => setTechs( e.target.value)} id='techs'></input>
    </div>
    <div className="input-group">
      <div className='input-block'>
        <label htmlFor='latitude'>Latitude</label>
        <input type="number" name='latitude' id='latitude' onChange={ e => setLatitude(e.target.value) } value={latitude}></input>
      </div>
      <div className='input-block'>
        <label htmlFor='longitude'>Longitude</label>
        <input type="number" name='longitude' id='longitude' onChange={ e => setLongitude(e.target.value)} value={longitude}></input>
      </div>
    </div>
    <button type="submit">salvar</button>
  </form>
  )
}

export default DevForm;