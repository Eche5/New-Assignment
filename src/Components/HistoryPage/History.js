import React from 'react'
import styles from './History.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from '../Assets/photo-1443980995706-8d107e98e707.png'
import carousel2 from '../Assets/photo-1458442310124-dde6edb43d10.png'

export default function History() {
  return (
    <div className={styles.component}>
      <span className={styles.prefix}>01.</span>
      <span className={styles.content}>HISTORY</span>
      <p className={styles.ptag}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,
        quam ut pharetra tempus, tortor sapien condimentum ligula, non tincidunt
        velit risus sed dolor. Curabitur ac rutrum lectus, sed consectetur urna.
        Fusce fermentum, lorem sed hendrerit blandit, purus nunc volutpat augue,
        a elementum nunc felis sit amet neque. Integer sed felis pulvinar,
        mollis justo sed, lacinia mi. Praesent convallis arcu ut libero
        malesuada tincidunt
      </p>
      <div className={styles.carouselContainer}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div className={styles.slide}>
            <img
              src={carousel1}
              alt="Image 1"
              className={styles.carouselImage}
            />
          </div>
          <div className={styles.slide}>
            <img
              src={carousel2}
              alt="Image 2"
              className={styles.carouselImage}
            />
          </div>
          <div className={styles.slide}>
            <img
              src={carousel1}
              alt="Image 1"
              className={styles.carouselImage}
            />
          </div>
          <div className={styles.slide}>
            <img
              src={carousel2}
              alt="Image 2"
              className={styles.carouselImage}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
