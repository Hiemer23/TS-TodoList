import { BsPlusSquare } from 'react-icons/bs'

import { useState } from 'react'

import style from '../styles/Add_Task.module.css'

type Props = {
  handle_Add_Task: (taskName: string) => void
}

function Add_Task({ handle_Add_Task }: Props) {

  const [inputText, setInputText] = useState('')


  const handleInput = (e: any) => {
    e.preventDefault()
    handle_Add_Task(inputText)
    setInputText('')
  }

  return (
    <form className={style.input_container} onSubmit={e => handleInput(e)}>
      <button><BsPlusSquare /></button>
      <input className={style.input}
        type="text"
        placeholder='Adicione uma Tarefa'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        required
      />
    </form>
  )
}

export default Add_Task