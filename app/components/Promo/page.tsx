import React from 'react'
import styles from './page.module.css'
import Marquee from "react-fast-marquee";





const page = () => {
  return (
    <div className={styles.promo}>
      <Marquee speed={80} pauseOnHover autoFill>
        <span>Spend $20 or more and get unlimited rolls</span>
        
      </Marquee>
    </div>
  )
}

export default page
