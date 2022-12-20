import Container from '../Container'
import s from './header.module.scss'



const Header:React.FC = () => {


    return(
        <header className={s.header}>
            <Container>
               <h2> Header </h2>          
            </Container> 
        </header>
    )
}


export default Header