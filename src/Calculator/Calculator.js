import React, { useState } from 'react';
import './Calculator.css'
export const Calculator = () => {
    const [number, setnumber] = useState("")
    const handleClick = (e) => {
        setnumber(number.concat(e.target.value))
    }
    const handleClear = (e) => {
        setnumber('')
    }
    const handleSlice = (e) => {
        setnumber(number.slice(0, -1))
    }
    const handleAnswer = () => {
        try {
            setnumber(eval(number).toString())

        } catch (error) {
            setnumber('Invalid')
        }
    }
    return <div className='calculator'>
        <h1>Calculator</h1>
        <form>
            <input type="text" placeholder='0' value={number} />
        </form>
        <div className='cal-numbrs'>
            <button onClick={handleClear} className='btn'>AC</button>
            <button onClick={handleSlice} value="C" className='btn'>C</button>
            <button onClick={handleClick} value="%" className='btn'>%</button>
            <button onClick={handleClick} value="/" className='btn'>/</button>

            <button onClick={handleClick} value="7" className='btn'>7</button>
            <button onClick={handleClick} value="8" className='btn'>8</button>
            <button onClick={handleClick} value="9" className='btn'>9</button>
            <button onClick={handleClick} value="*" className='btn'>*</button>

            <button onClick={handleClick} value="4" className='btn'>4</button>
            <button onClick={handleClick} value="5" className='btn'>5</button>
            <button onClick={handleClick} value="6" className='btn'>6</button>
            <button onClick={handleClick} value="-" className='btn'>-</button>

            <button onClick={handleClick} value="1" className='btn'>1</button>
            <button onClick={handleClick} value="2" className='btn'>2</button>
            <button onClick={handleClick} value="3" className='btn'>3</button>
            <button onClick={handleClick} value="+" className='btn'>+</button>

            <button onClick={handleClick} value="0" className='btn'>0</button>
            <button onClick={handleClick} value="." className='btn'>.</button>
            <button onClick={handleAnswer} className='btn'>=</button>
        </div>
    </div>;
};
