import propTypes from "prop-types";
import styles from "./Add.module.css";

function Btn({coffee}){
    
    return(
        <button
        className={styles.title}
        >{coffee}</button>
    )
}
Btn.propTypes={
    coffee:propTypes.string.isRequired,
}

export default Btn;