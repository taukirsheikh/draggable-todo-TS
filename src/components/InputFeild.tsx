import React from 'react'
import './style.css'

const InputFeild = () => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter the task' className='input__box' />
        <button className='input__submit' type="submit">GO</button>
   

    </form>
  )
}

export default InputFeild
