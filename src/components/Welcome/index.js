import React from "react"
import { makeStyles } from '@mui/styles'
import MainWaveImg from '../../images/main-wave.png'
import TheEarthImg from '../../images/earth-img.png'
import GrownImg from '../../images/premium-quality.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
      width: '88%',
      height: '85%',
      background: '#fff',
      position: 'relative',
      borderRadius: 40,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
        display: 'block',
        backgroundImage: `url(${MainWaveImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '102% 70%',
      }
  },
  content: {
    marginLeft: '7%',
    zIndex: 2,
    },
    img: {
      position: 'absolute',
      width: '25%',
      right: 80,
      top: 110
  },
    h2: {
      fontSize: 30,
      margin: 0,
      fontWeight: 'bold',
    },
    p: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 24
    },
    grownImg: {
      marginRight: 5
  },
  button: {
      color: '#000',
      textTransform: 'unset'
    }
  })

const Welcome = () => {
  const classes = useStyles()
  return (
    <div className='mainBackground'>
      <div className={classes.container}>
        <img src={TheEarthImg} alt="The Earth" className={classes.img} />
        <div className={classes.content}>
          <h2 className={classes.h2}>Chào mừng đến với S-BOBAHO</h2>
          <p className={classes.p}>
            <img src={GrownImg} alt="Grown" className={ classes.grownImg }/>
            Hệ thống cho vay, buôn bán đồ quá hạn hàng đầu Việt Nam
          </p>
          <Button variant="contained" className={'primaryButton'} component={Link} to={`${process.env.PUBLIC_URL}/sign-in`}>Đăng nhập tài khoản của bạn</Button>
        </div>
      </div>
    </div>
  )
}
export default Welcome