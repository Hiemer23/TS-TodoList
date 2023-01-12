import { Item } from '../../types/Item'

import { useState } from 'react'

import style from '../styles/Edicao.module.css'

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
            <div className={style.interno}>
                {/* <h1>Editar Tarefa</h1> */}
                <form onSubmit={e => handleUpdate(e)}>
                    <input type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        required>
                    </input>
                    <button type="button" className={style.buttonClose} onClick={handleClose}>CLOSE</button>
                    <button type="button" className={style.buttonClose} onClick={e => handleUpdate(e)}>ATUALIZAR</button>
                </form>
            </div>

        </div >
    )
}

export default Edicao