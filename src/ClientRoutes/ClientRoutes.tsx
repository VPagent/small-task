import { Route, Routes } from "react-router-dom"
import { lazy } from "react" 

const HomePage = lazy(() => import('../pages/HomePage'))
const SingleItemPage = lazy(() => import('../pages/SingleItemPage'))

const ClientRoutes:React.FC = () => {

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:elemId" element={<SingleItemPage />} />
        </Routes>
    )
}


export default ClientRoutes