import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2, 0, 2)
    },
  },
}));
export default function hellok8s() {
  const classes = useStyles();
  let history = useHistory();

  return (

    <div style={{ display: 'flex', justifyContent: 'center', padding: 30, alignItems: "center" }}>
      <div className={classes.root} >
        <center><img src={img} alt="" /></center>
        <br></br> <br></br> <h2>Welcome to Docker Session </h2>
        <center>

          <Button
            // type="submit"
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={() => {
              history.push("/AddUser")
            }}
          >
            Return
          </Button>
        </center>

      </div>
    </div>

  );
}
