import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {obtenerPoke,siguientePoke, anteriorPoke,detallePoke}  from "../redux/pokeDucks";
import Detalle from './Detalle';

const Pokemones = () => {
    const dispatch= useDispatch() 
    const pokemones=useSelector(store=>store.pokemones.results)
    console.log(pokemones)
    const next=useSelector(store=>store.pokemones.next)
    const previous=useSelector(store=>store.pokemones.previous)

  return (
    <div className='row mx-5'>

    <div className=' col-md-6'>
            Lista Pokemones
            <br/>
            <div >
              
            {
            pokemones.length===0 && 
            <button onClick={()=> dispatch(obtenerPoke())} className='btn btn-dark'
            > Get Pokemones</button>
          }
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
          {
            next && <button onClick={()=> dispatch(siguientePoke())} className='btn btn-dark'
            > siguiente Pokemones</button>
          }
            
          {
            previous && <button onClick={()=> dispatch(anteriorPoke())} className='btn btn-dark'
            > Anterior Pokemones</button>
          }
          </div>

            </div>
          
            
            <ul className='list-group mt-3'>
              {
                pokemones.map((item,index) =>(
                  <li className='list-group-item text-uppercase'
                   key={index}>{item.name}
                   <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-dark me-md-2"
                       type="button"
                       onClick={()=> dispatch(detallePoke(item.url))}
                       
                       >Info</button>
                      
                    </div>
                   </li>
                ))
              }
            </ul>
        </div>

        <div className='col-md-6'>
          <h3>Detalle Pokemon</h3>
              <Detalle/>
        </div>

    </div>
    
    
    
  )
}

export default Pokemones