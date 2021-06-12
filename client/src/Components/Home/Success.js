import React from 'react'
import styles from './Success.module.css'

const Success = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div_1}>
        <div className={styles.div_img} style={{backgroundColor:'yellow'}}>
          <div className={styles.img_1}><img className={styles.image} src="https://drive.google.com/uc?id=1__ItwdAhxosZwCoKUOc45ktpyLWeRWNb" alt="" /></div>
          <div className={styles.img_2}><img className={styles.image} src="https://drive.google.com/uc?id=1MQ4gBOwKO1Bnp0VIPhBIt-d9DbU0Gr3N" alt=""  /></div>
        </div>
        <div className={styles.text_1} >
          <div className={styles.text_border1} >
            <h1>Media Coverage</h1>
            <p>A small description about the activities Lorem ipsum dolor sit amet, consectetur adipiscing elit Interger tristique pellentesque dignissi. Nam eget molestie tortor. Ut at placerat ex Suspendisse potenti.</p>
          </div>
          
        </div>
      </div>
      <div className={styles.div_2}>
        <div className={styles.text_2}>
          <div className={styles.text_border2}>
            <h1>Success Stories</h1>
            <p>A small description about the activities Lorem ipsum dolor sit amet, consectetur adipiscing elit Interger tristique pellentesque dignissi. Nam eget molestie tortor. Ut at placerat ex Suspendisse potenti.</p>
          </div>
          
        </div>
        <div className={styles.div_img}>
          <div className={styles.img_3}><img className={styles.image} src="https://drive.google.com/uc?id=1cVqlfvV4-b3sFjoQ4_XoUuo0To9v-ZQ8" alt=""  /></div>
          <div className={styles.img_4}><img className={styles.image} src="https://drive.google.com/uc?id=1wwxLXH5EI7c2R1P1kChOIzBgwkOzxZlK" alt=""  /></div>
        </div>
      </div>
      
    </div>
  )
}

export default Success
