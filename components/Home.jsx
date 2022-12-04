import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <div>
            <div className={styles.home} >
                <div className={styles.div_home}>
                    <div className={styles.div_img}>
                        <h1 className={styles.div_img_h1}>Home</h1>
                    </div>
                    <div className={styles.div_contenido}>
                        <div className={styles.div_text2}>
                            <a href="#"></a>
                        </div>
                        <div className={styles.div_text}>
                            <h2>Logros</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Exercitationem laudantium quaerat fugiat non
                                alias animi, voluptatibus praesentium omnis dolorum
                                deleniti veritatis tenetur. Veritatis alias, velit
                                omnis dolore repellat cupiditate voluptas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.div_contenido2}>
                <article className={styles.div_contenido2_cosas}>
                    <h3>Partes especiales de la página</h3>
                    <p
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eum iste quia repudiandae enim! Obcaecati, fuga. Nostrum rem
                        officiis aperiam dolorum minima minus cumque corrupti in
                        perspiciatis! Repudiandae accusamus cumque delectus!
                    </p>
                </article>
                <article className={styles.div_contenido2_cosas}>
                    <h4>Beneficios:</h4>
                    <h5>Por comprar online tienes los siguientes Beneficios.</h5>
                    <p
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eum iste quia repudiandae enim! Obcaecati, fuga. Nostrum rem
                        officiis aperiam dolorum minima minus cumque corrupti in
                        perspiciatis! Repudiandae accusamus cumque delectus!
                    </p>
                </article>
                <section className={styles.div_contenido2_cosas}>
                    <h4>Horario:</h4>
                    <p>De Lunes a Jueves: 15:30 PM a 23:50 PM</p>
                    <p>De Viernes a Domingo: 15:30 PM a 1:00 AM</p>
                </section>
            </div>
        </div>
        
    )
}

export default Home