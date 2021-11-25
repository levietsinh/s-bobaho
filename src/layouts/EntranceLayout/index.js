import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: '88%',
    height: '85%',
    background: '#fff',
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E4133'
  },
})
const EntranceLayout = ({children}) => {
  const classes = useStyles()
  return (
    <div className="mainBackground">
      <div className={classes.container}>
        {children}
      </div>
    </div>
  )
}
export default EntranceLayout