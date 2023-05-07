import React from "react";
import styles from "./BobahoInput.module.scss";
import "@fontsource/montserrat";

const BabahoInput = ({
  id,
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
  onBlur,
  errors,
  touched,
  disabled = false,
}) => {
  return (
    <div className={styles.bobahoGroup}>
      <label htmlFor={id} className={styles.bobahoLabel}>
        {label}
      </label>
      <input
        id={id}
        className={styles.bobahoInput}
        placeholder={placeholder}
        style={{ fontFamily: "Montserrat" }}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {errors && touched && <p className="errorText">{errors}</p>}
    </div>
  );
};
export default BabahoInput;
