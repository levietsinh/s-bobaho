import styles from './BobahoButton.module.scss'
import "@fontsource/montserrat";
import Button from '@mui/material/Button';

function BobahoButton({ name, type, onClick }) {
  return (
    <Button
      variant="outlined"
      type={type}
      classes={{outlined: styles.bobahoButton}}
      style={{fontFamily: 'Montserrat'}}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}
export default BobahoButton