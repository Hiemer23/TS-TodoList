import { useState } from 'react'

import { Item } from '../../types/Item'

import { BsFillTrashFill } from 'react-icons/bs'

type Props = {
    item: Item,
    handle_done_task: (id_task: number) => void,
    remove_task: (id_task: number) => void
}

import style from '../styles/Lista.module.css'

function ItemLista({ item, handle_done_task, remove_task }: Props) {

    const [isChecked, setIsChecked] = useState(item.done)

    const handleCheck = (e: any) => {
        setIsChecked(e.target.checked)
        handle_done_task(item.id)
        //console.log("clicou")
    }

    const handleDelete = (e: any) => {
        e.preventDefault()
        remove_task(item.id)
    }

    return (
        <div className={isChecked ? style.card_done : style.card} key={item.id}>
            <input type='checkbox'
                checked={isChecked}
                onChange={handleCheck}
            ></input>
            <p className={style.id}>#{item.id}</p>
            <p className={style.name}>{item.name}</p>
            <button onClick={e => handleDelete(e)}><BsFillTrashFill /></button>
        </div>
    )
}

export default ItemLista