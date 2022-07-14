import axios from 'axios'

// contantes state
const dataInicial={
   count:0,
   next:null,
   previous:null,
   results:[],
   unpokemon:''
}

//type
const OBTENER_POKEMONES='OBTENER_POKEMONES'
const EXITO_SIGUIENTE='EXITO_SIGUIENTE'
const EXITO_ANTERIOR='EXITO_ANTERIOR'
const  EXITO_DETALLE=' EXITO_DETALLE'



//reducer
export default function pokeReducer (state= dataInicial,action){
switch (action.type) {
    case OBTENER_POKEMONES:
        return {...state, ...action.payload}
    case EXITO_SIGUIENTE:
        return{...state,...action.payload}
    case EXITO_ANTERIOR:
        return{...state,...action.payload}
    case EXITO_DETALLE:
        return{...state, unpokemon:action.payload}
        default:
            return state
}
}


//action
export const  obtenerPoke = ()=> async(dispatch,getState)=>{

    console.log('poke pokemones')
    
    

    try {
       const res= await axios.get(`https://pokeapi.co/api/v2/ability/?offset=0&limit=20`)
            dispatch({
                type:OBTENER_POKEMONES,
                payload:res.data
            })

    } catch (error) {

        console.log(error)
    }
}

export const siguientePoke =()=> async (dispatch,getState)=>{
    //const {offset} = getState().pokemones
    //const siguiente= offset + 20
    const {next}=getState().pokemones
    try {
        const res= await axios.get(next)
        dispatch({
            type: EXITO_SIGUIENTE,
            payload:res.data     
        })
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPoke =()=> async (dispatch,getState)=>{

    const {previous}=getState().pokemones
    try {
        const res= await axios.get(previous)
        dispatch({
            type: EXITO_ANTERIOR,
            payload:res.data     
        })
    } catch (error) {
        console.log(error)
    }
}

export const detallePoke =(url= 'https://pokeapi.co/api/v2/ability/1/')=> async (dispatch,getState)=>{

    //const {previous}=getState().pokemones
    try {
        const res= await axios.get(url)
        console.log(url)
        console.log(res.data)
    dispatch({
        type:EXITO_DETALLE,
        payload:res.data

      
    })
    
    } catch (error) {
        console.log(error)
    }
}