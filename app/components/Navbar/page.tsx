import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

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

      <Image
        className={styles.redlobster}
        src="/red-lobster.png"
        alt="Red Lobster Logo"
        width={150}
        height={50}
      />
      
    </div>
  )
}

export default page
