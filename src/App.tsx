import { useEffect } from "react";
import { useDispatch} from "react-redux";
import ClientRoutes from "./ClientRoutes";
import { Suspense } from "react";
import Header from "./components/Header";

import { getAllItems } from "./redux/operations";
import Loader from "./components/Loader";


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    //@ts-ignore
    dispatch(getAllItems())
  }, [])

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <ClientRoutes />
      </Suspense>
    </>
  );
}

export default App;
