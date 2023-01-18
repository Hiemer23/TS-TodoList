import ItemLista from './ItemLista'
import Add_Task from './Add_Task'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Item } from '../../types/Item'

import style from '../styles/Lista.module.css'

function Lista() {

    const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem("Lista") || '[]'))
    let targetPos: number
    let targetPosDrop: number
    const changeList = (newList: Item[]) => {
        setList(newList)
        localStorage.setItem("Lista", JSON.stringify(newList))
    }

    const handle_Add_Task = (taskName: string) => {
        let newList = [...list]
        newList.push({
            id: uuidv4(),
            name: taskName,
            done: false
        })

        changeList(newList)
    }

    const handle_done_task = (id_task: string) => {
        let newList = [...list]
        newList.map(list_item => {
            if (list_item.id == id_task) {
                list_item.done = !list_item.done
            }
        })
        changeList(newList)
    }

    const remove_task = (id_task: string) => {
        let newList = [...list]
        newList = newList.filter(list_item => list_item.id !== id_task)
        changeList(newList)
        return newList
    }

    const sort_task = (lista_temp: Item) => {
        let newList = remove_task(lista_temp.id)

        newList.splice(targetPosDrop, 0, lista_temp)
        changeList(newList)
    }

    const edit_task = (id_task: string, new_task: string) => {
        let newList = [...list]

        newList = newList.map(list_item => {
            if (list_item.id !== id_task) {
                return list_item
            }
            else {
                return {

                    id: list_item.id,
                    name: new_task,
                    done: list_item.done
                }
            }
        })
        changeList(newList)
    }

    const onDragEnter = (e: any) => {
        e.preventDefault();
    }
    const onDragOver = (e: any) => {
        e.preventDefault();
    }
    const onDrop = (e: any) => {
        e.preventDefault();
        sort_task(list[targetPos])
    }

    const onDragTask = (id_task: string, pos: number) => {
        targetPos = pos
    }

    const setTargetDrop = (pos: number) => {
        targetPosDrop = pos
    }

    return (
        <>
            <div className={style.container}>
                <Add_Task handle_Add_Task={handle_Add_Task} />
            </div>
            <div className={style.container}
                onDragEnter={(e: any) => onDragEnter(e)}
                onDragOver={(e: any) => onDragOver(e)}
                onDrop={(e: any) => onDrop(e)}>
                {list.length > 0 ? list.map((item, pos) => (
                    <ItemLista
                        item={item}
                        pos={pos}
                        handle_done_task={handle_done_task}
                        remove_task={remove_task}
                        edit_task={edit_task}
                        onDragTask={onDragTask}
                        target={setTargetDrop}
                        key={item.id}></ItemLista>
                )) :
                    <h1 className={style.name}>Não há itens</h1>}
            </div>
        </>
    )
}

export default Lista