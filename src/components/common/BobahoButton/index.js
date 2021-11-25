import styles from './BobahoButton.module.scss'
import "@fontsource/montserrat";
import Button from '@mui/material/Button';

function BobahoButton({ name }) {
  return (
    <Button variant="outlined" classes={{outlined: styles.bobahoButton}} style={{fontFamily: 'Montserrat'}}>
      {name}
    </Button>
  )
}
export default BobahoButton