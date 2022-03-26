import React from "react";
import styles from './bobaho-input.module.scss'
import "@fontsource/montserrat";

const BabahoInput = ({ id, label, placeholder, type='text', value = '', onChange, onBlur, errors, touched }) => {
  return (
    <div className={styles.bobahoGroup}>
      <label htmlFor={id} className={styles.bobahoLabel}>{ label }</label>
      <input
        id={id}
        className={styles.bobahoInput}
        placeholder={placeholder}
        style={{ fontFamily: 'Montserrat' }}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && touched && <p className="errorText">{errors}</p>}
    </div>
  )
}
export default BabahoInput