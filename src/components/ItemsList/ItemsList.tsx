import { useSelector } from 'react-redux'
import { Item } from '../../types'
import Card from '../Card'
import s from './itemsList.module.scss'




const ItemsList:React.FC = () => {

    const items = useSelector((state:any) => state.items)

    return(
        <>
            {items.length > 0 && 
                <ul className={s.list}>
                    {items.map((elem:Item) => 
                        (<Card key={elem.id} item={elem}/>))}
                </ul>}
        </>
    )
}


export default ItemsList