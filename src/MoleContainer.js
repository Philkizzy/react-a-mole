//importing react modules
import { useState } from 'react'

//importing components
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
        //let [score, setScore] = useState(0)
        let [theMole, setTheMole] = useState(false) 
    
    
        const handleClick = (e) => {
            props.setScore(props.score + 1)
            setTheMole(false)
        }
            //running a condition to know which component to render between EmptySlot and Mole
        let displayMole = theMole ? <Mole setScore = {props.setScore} toggle = {setTheMole} handleClick = {handleClick}/> : <EmptySlot toggle={setTheMole}/>
        
        
   //render the displayMole variable
    return (
        <div>
           {displayMole}
        </div>
    )
}

export default MoleContainer //export the MoleContainer component