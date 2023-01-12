import { useState } from 'react'

import { Item } from '../../types/Item'

type Props = {
    item: Item
}

import style from '../styles/Lista.module.css'

function ItemLista({ item }: Props) {

    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <div className={isChecked ? style.card_done:style.card} key={item.id}>
            <input type='checkbox'
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            ></input>
            <p className={style.id}>#{item.id}</p>
            <p className={style.name}>{item.name}</p>
        </div>
    )
}

export default ItemLista