import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {detallePoke} from '../redux/pokeDucks'



const Detalle = () => {
    const dispatch= useDispatch()
    React.useEffect(()=>{
        
        const fechData= ()=>{
            dispatch(detallePoke())
        }
        fechData()
    },[dispatch])

    const unPoke= useSelector(store=>store.pokemones.unpokemon)
    console.log(unPoke)

  return (
    <div className='card'>
        <div className='card-body'>
            
                <div className='card-title'>
                    Nombre Pokemon
                    <p>{unPoke.name}</p> 
                </div>
                <p className='card-text'>
                    Id:{unPoke.id}
                </p>
        </div>
    </div>
  )
}

export default Detalle