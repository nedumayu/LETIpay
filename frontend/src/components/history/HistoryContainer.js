import PayHistory from "./PayHistory";
import TransHistory from "./TransHistory";

const HistoryContainer = () => {
    return(
        <div style={{width: "1200px", display: "flex", justifyContent: "space-between", margin: "20px auto"}}>
            <PayHistory/>
            <TransHistory/>
        </div>
    )
}

export default HistoryContainer;