import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        <ul>
          <li>Menu</li>
          <li>Specials</li>
          <li>Find Location</li>
          <li>Order Now</li>
        </ul>
      </div>
      
    </div>
  )
}

export default page
