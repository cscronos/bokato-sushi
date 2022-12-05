import styles from "../styles/Quines.module.css";
import Image from "next/image";

const Quienes = () => {
    return (
        <div>
            <div className={styles.quienessomos}>
                <div className={styles.div_quienessomos}>
                    <div className={styles.div_historia}>
                        <h1>Historia</h1>
                        <h2>Comiezo de comienzos</h2>
                        <p>
                            En la época de pandemia en chile, se juntan 2 amigos un
                            día cualquiera para ellos, con mucha hambre ellos
                            pensaron en que comer algo, ellos expresaron la idea de
                            comer sushi al mismo tiempo , quizás fue conciencia xd,
                            lo que realmente asusto a nuestros protagonistas es que
                            una persona que esperaba en el paradero del autobús
                            junto a ellos, les habla con mucha iniciativa y les
                            dijo, "Chicos, yo puedo hacer de repartidos".
                        </p>
                        <p>
                            En ese momento se formó la "La dinastía sushi", un
                            nombre verdadera mente intimidante, como queriendo decir
                            "Comprame sushi si no", así que fue cambiado muy pronto
                            a "Bokato Sushi" como se llama hoy en día.
                        </p>
                        <p
                            >Los jóvenes empezaron vendiendo a sus amigos y
                            conocidos, pero rápidamete creciron por sus calidad.
                            <br />
                            Hoy en dia, las tres personas son los jefes de 18
                            locales repartidos por todo chile.
                        </p>
                    </div>
                    <div className={styles.div_equipo}>
                        <h1>Equipo</h1>
                        <div className={styles.div_present}>
                            <div className={styles.mati}>
                                <h2>Matias Valenzuela</h2>
                                <Image src="/img/matifer.jpg" alt="foto mati" width={200} height={210}/>
                                <p>Nació 8 de Septiembre, 2003</p>
                            </div>
                            <div className={styles.cris}>
                                <h2>Cristobal Sandoval</h2>
                                <Image src="/img/cristobal.jpeg" alt="foto mati" width={200} height={210}/>
                                <p>Nació el 29 de mayo, 2002</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quienes