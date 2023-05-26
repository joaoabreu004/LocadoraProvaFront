import { useEffect, useState } from "react";
import ModalDetalhesArea from "../ModalDetalhesArea";
import styles from "./Patios.module.css"

const Patios = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [areaId, setAreaId] = useState(0)





    return (
        <>

            <ModalDetalhesArea isOpenModal={isOpenModal} />
            <section className={styles.patio}>
                <div id={1}  className={styles.patios}>1</div>
                <div id={2} className={styles.patios}>2</div>
                <div id={3} className={styles.patios}>3</div>
                <div id={4} className={styles.patios}>4</div>
                <div id={5} className={styles.patios}>5</div>
                <div id={6} className={styles.patios}>6</div>
                <div id={7} className={styles.patios}>7</div>
                <div id={8} className={styles.patios}>8</div>
                <div id={9} className={styles.patios}>9</div>
                <div id={10} className={styles.patios}>10</div>
                <div id={11} className={styles.patios}>11</div>

            </section>
        </>
    )
}
export default Patios;