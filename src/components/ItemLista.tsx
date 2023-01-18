import { useState } from 'react'

import { Item } from '../../types/Item'

import { BsFillTrashFill, BsFillPenFill } from 'react-icons/bs'

type Props = {
    item: Item,
    pos: number,
    handle_done_task: (id_task: string) => void,
    remove_task: (id_task: string) => void,
    edit_task: (id_task: string, new_task: string) => void,
    onDragTask: (id_task: string, pos: number) => void,
    target: (pos: number) => void
}

import style from '../styles/Lista.module.css'
import Edicao from './Edicao'

function ItemLista({ item, pos, target, handle_done_task, remove_task, edit_task, onDragTask }: Props) {

    const [isChecked, setIsChecked] = useState(item.done)
    const [edit, setEdit] = useState(false)
    const [drag, setDrag] = useState(false)

    const handleCheck = (e: any) => {
        setIsChecked(e.target.checked)
        handle_done_task(item.id)
    }

    const handleDelete = (e: any) => {
        e.preventDefault()
        remove_task(item.id)
    }

    const handleEdit = (e: any) => {
        setEdit(true)
    }

    const closeWindow = () => {
        setEdit(false)
    }
    const onDragStart = (id_task: string, e: any) => {
        onDragTask(id_task, pos)
        setDrag(true)
    }
    const onDragOver = (e: any) => {
        e.preventDefault()
        target(pos)
    }

    const onDragEnd = (e: any) => {
        e.preventDefault()
        setDrag(false)
    }

    return (
        <div id={isChecked ? style.card_done : style.card}
            className={drag ? style.drag : "normal"}
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(item.id, e)}
            onDragOver={(e) => onDragOver(e)}
            onDragEnd={(e) => onDragEnd(e)}>

            {edit && <Edicao item={item} closeWindow={closeWindow} edit_task={edit_task} />}
            <input className={style.check}
                type='checkbox'
                checked={isChecked}
                onChange={handleCheck}
            ></input>
            <p className={style.name}>{item.name}</p>
            <button className={style.edit} onClick={e => handleEdit(e)}><BsFillPenFill /></button>
            <button className={style.delete} onClick={e => handleDelete(e)}><BsFillTrashFill /></button>
        </div >
    )
}

export default ItemLista