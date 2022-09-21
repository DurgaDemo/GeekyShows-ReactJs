import React from 'react'

function Function(){
    function handleClick(e){
        console.log("Hi handle")
        e.preventDefault()
    }
        return(
            <div>
                <button className='btn btn-danger' onClick={handleClick}>Click</button>
                <br></br>
                <a href='https://www.w3schools.com/' onClick={handleClick}>w3schools</a>
            </div>
        )
    
}

export default Function