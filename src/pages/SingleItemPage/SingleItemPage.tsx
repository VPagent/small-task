import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../../components/Container'
import { Item } from '../../types'
import s from './singleItemPage.module.scss'



const SingleItemPage:React.FC = () => {
    const [item, setItem] = useState<null | Item>(null)
    const items = useSelector((state:any) => state.items)
    const {elemId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(items.length > 0){
            const currentItem = items.find((elem:Item) => elem.id === elemId)
            setItem(currentItem)
        }
    }, [items])

    const handleClickOnBack = () => {
        navigate('/')
    }

    return(
        <>
        <section className='section'>
            <Container>
                {item && 
                    <>
                        <div className={s.card}>
                            <button type='button' onClick={handleClickOnBack} className={s.card_btn}>Back</button>
                            <img src={item.urls.full} alt={item.user.name} className={s.card_img}/>
                            <h1 className={s.card_title}>{item.user.name}</h1>
                        </div>
                </>}
            </Container>
        </section>
        Single
        </>
    )
}



export default SingleItemPage