import { Link } from 'react-router-dom'
import { Item } from '../../types'
import s from './card.module.scss'

type Props = {
    item: Item
}

const Card:React.FC<Props> = ({item}) => {

const {id, user, alt_description, urls} = item

    return(
        <li key={id} id={id} className={s.card}>
            <Link to={`/${id}`} className={s.card_link}>
                {/* <div className={s.card_img_wrapper}> */}
                    <img src={urls.thumb} alt={user.name} className={s.card_img}/>
                {/* </div> */}
                <div className={s.card_text_wrapper}>
                    <h3 className={s.card_title}>{alt_description ? alt_description : 'No Name'}</h3>
                    <p className={s.card_text}>author: {user.name}</p>
                </div>
            </Link>
        </li>
    )
}


export default Card