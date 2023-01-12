import { Item } from '../../types/Item'

import { useState } from 'react'

import style from '../styles/Edicao.module.css'

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

type Props = {
    item: Item,
    closeWindow: () => void,
    edit_task: (id_task: number, new_task: string) => void
}


function Edicao({ item, closeWindow, edit_task }: Props) {

    const [inputText, setInputText] = useState(item.name)

    const handleClose = () => {
        closeWindow()
    }


    const handleUpdate = (e: any) => {
        e.preventDefault()
        if (inputText) {
            let new_name = inputText
            edit_task(item.id, new_name)
        }
        closeWindow()
    }

    return (
        <div className={style.container_edit}>

            <form className={style.interno} onSubmit={e => handleUpdate(e)}>
                <p className={style.titulo}>Editar Tarefa</p>
                <input className={style.textBox} type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    required>
                </input>
                <div className={style.buttonContainer}>
                    <button type="button" className={style.buttonClose} onClick={handleClose}><AiOutlineClose /></button>
                    <button type="button" className={style.buttonUpdate} onClick={e => handleUpdate(e)}><AiOutlineCheck /></button>
                </div>
            </form>

        </div >
    )
}

export default Edicao