import ItemLista from './ItemLista'
import Add_Task from './Add_Task'

import { useState } from 'react'

import { Item } from '../../types/Item'

import style from '../styles/Lista.module.css'

function Lista() {

    const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem("Lista") || '{}'))

    const changeList = (newList: Item[]) => {
        setList(newList)
        localStorage.setItem("Lista", JSON.stringify(newList))
    }

    const handle_Add_Task = (taskName: string) => {
        let newList = [...list]
        if (list.length) {
            newList.push({
                id: list[list.length - 1].id + 1,
                name: taskName,
                done: false
            })
        }
        else {
            newList.push({
                id: list.length + 1,
                name: taskName,
                done: false
            })
        }

        changeList(newList)
    }

    const handle_done_task = (id_task: number) => {
        let newList = [...list]
        newList.map(list_item => {
            if (list_item.id == id_task) {
                list_item.done = !list_item.done
            }
        })
        changeList(newList)
        //console.log(newList)
    }

    const remove_task = (id_task: number) => {
        let newList = [...list]
        newList = newList.filter(list_item => list_item.id !== id_task)
        changeList(newList)
    }

    const edit_task = (id_task: number, new_task: string) => {
        let newList = [...list]

        newList = newList.map(list_item => {
            if (list_item.id !== id_task) {
                //console.log("teste")
                return list_item
            }
            else {
                //console.log("teste")
                return {

                    id: list_item.id,
                    name: new_task,
                    done: list_item.done
                }
            }
        })
        changeList(newList)
    }

    return (
        <>
            <div className={style.container}>
                <Add_Task handle_Add_Task={handle_Add_Task} />
            </div>
            <div className={style.container}>
                {list.length > 0 ? list.map(item => (
                    <ItemLista item={item}
                        handle_done_task={handle_done_task}
                        remove_task={remove_task}
                        edit_task={edit_task}
                        key={item.id}></ItemLista>
                )) :
                    <h1 className={style.name}>Não há itens</h1>}
            </div>
        </>
    )
}

export default Lista