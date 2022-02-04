//import react modules
import {useEffect} from 'react'

//import asset
import moleHillImg from './molehill.png'

function EmptySlot(props){
    useEffect(() => {
    
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
        //render the function handleClick using props
    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleHillImg} alt=""
            onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot // export the EmptySlot component