import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vel sed
          fuga illum possimus reprehenderit et ipsam, adipisci quo ducimus
          incidunt nemo ipsa fugit hic iure distinctio alias. Ducimus, minima?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" className={styles.brandImg} fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" className={styles.heroImg} fill />
      </div>
    </div>
  );
};

export default Home;
