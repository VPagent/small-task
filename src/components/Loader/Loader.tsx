import { ClockLoader } from "react-spinners"

const styles =  {
    margin: "auto",
    width: "100%",
    height: "300px",
    paddingTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Loader: React.FC = () => {

    return(
        <div style={styles}>
            <ClockLoader color="#000" />
        </div>
    )
}


export default Loader