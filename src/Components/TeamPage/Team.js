import React from "react";
import styles from "./Team.module.css";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
export default function Team() {
  return (
    <div>
      <span className={styles.prefix}>02.</span>
      <span className={styles.content}>CLIMB</span>
      <p className={styles.ptag}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,
        quam ut pharetra tempus, tortor sapien condimentum ligula, non tincidunt
        velit risus sed dolor. Curabitur ac rutrum lectus, sed consectetur urna.
        Fusce fermentum, lorem sed hendrerit blandit, purus nunc volutpat augue,
        a elementum nunc felis sit amet neque. Integer sed felis pulvinar,
        mollis justo sed, lacinia mi. Praesent convallis arcu ut libero
        malesuada tincidunt
      </p>
      <div className={styles.mountain}>
        <p className={styles.one}>MOUNTAIN 1</p>
        <p className={styles.two}>MOUNTAIN 2</p>
      </div>
      <div className={styles.climb}>
        <div className={styles.container}>
          <div className={styles.header}>Schedule</div>
          <div className={styles.dates}>
            <div className={styles.date}>
              25th Nov 2016<span> Westbulum.viera</span>
            </div>
            <div className={styles.date}>
              28th Nov 2016 <span> Westbulum.viera</span>
            </div>
            <div className={styles.date}>
              30th Nov 2016 <span> Westbulum.viera</span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.mountain}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <div className={styles.footer}><p>LOSANGELES</p>
          <p>MOUNTAINS</p></div>
          
        </div>
      </footer>
    </div>
  );
}
