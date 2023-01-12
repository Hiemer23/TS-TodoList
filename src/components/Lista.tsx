import ItemLista from './ItemLista'

import { useState } from 'react'

import { Item } from '../../types/Item'

import style from '../styles/Lista.module.css'

function Lista() {

    const [list, setList] = useState<Item[]>([
        {
            id: 1,
            name: "Comprar pão na padaria",
            done: false,
        }, {
            id: 2,
            name: "Ir a padaria",
            done: true,
        },
    ])

    return (
        <div className={style.container}>
            {list.length > 0 ? list.map(item => (
                <ItemLista item={item}></ItemLista>
            )) :
                <h1 className={style.name}>Não há itens</h1>}
        </div>
    )
}

export default Lista