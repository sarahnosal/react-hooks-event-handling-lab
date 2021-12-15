import React from 'react';

function Keypad () {
    function enterPassword() {
        console.log('Entering password...')
    }
    return (
        <input type='password' onChange={enterPassword}></input>
    )
}

export default Keypad;