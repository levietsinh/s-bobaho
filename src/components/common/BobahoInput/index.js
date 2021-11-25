import React from "react";
import styles from './bobaho-input.module.scss'
import "@fontsource/montserrat";

const BabahoInput = ({ id, label, placeholder, type='text' }) => {
  console.log('styles', styles)
  return (
    <div className={styles.bobahoGroup}>
      <label for={id} className={styles.bobahoLabel}>{ label }</label>
      <input
        id={id}
        className={styles.bobahoInput}
        placeholder={placeholder}
        style={{ fontFamily: 'Montserrat' }}
        type={type}
      />
    </div>
  )
}
export default BabahoInput