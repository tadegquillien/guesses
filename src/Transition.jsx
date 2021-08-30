//this component is called between the Training phase and the Test phase. 
//it asks participants how difficult they found the game, and briefly introduces
//the test phase


import { useState } from 'react';

import { textStyle, buttonStyle } from './dimensions';




const Transition = (props) => {
    //keeps track of which page we are on
    const [ transitionTrial, setTransitionTrial ] = useState(0);
    //a list of the pages for the transition
    const transitionTrialsList = [
        <TransitionOne setTransitionTrial={setTransitionTrial}/>,
        <TransitionTwo setCurrentPhase={props.setCurrentPhase} />
    ];
    //display the current page
    return(
        transitionTrialsList[transitionTrial]
    )
    
    
}

//a question about the game difficulty
const TransitionOne = (props) => {
    //keeps track of the latest likert response
    
    const handleClick = () =>{
        props.setTransitionTrial((a)=>a+1);
    }
    
    //display the question
    return(
        <div style={textStyle}>
        <p>We will now start the main phase of the study.</p>
        <p>On each page, you will see a box. Next to the box, you will see different guesses that one could
            make about what will happen if someone randomly draws a ball from the box.
        </p>
        <p>For each guess, we will ask you to rate whether you think it is a good guess. You will rate each guess on a scale from 1 (for a very bad guess) to 9 (for a very good guess).</p>
        
        <br></br>
        <button style={buttonStyle} onClick={()=>handleClick()}>click to continue</button>
        </div>
        
    )
}

//briefly introduces the test phase
const TransitionTwo = (props) => {
    return(
        <div style={textStyle}>
            <p>There will be 13 boxes in total.</p>
            <p>Please try to stay concentrated and engaged throughout the task.</p>
            <button style={buttonStyle} onClick={()=>{props.setCurrentPhase("test")}}>click to start the task</button>
        </div>
    )
    
}

export default Transition;