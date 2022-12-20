import Container from '../../components/Container'
import ItemsList from '../../components/ItemsList'



const HomePage:React.FC = () => {

    return(
        <>
        <section className='section'>
            <Container>
                <h2>Homepage</h2>
                <ItemsList />
            </Container>
        </section>
        </>
    )
}


export default HomePage