import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img from './logo192.png'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2, 0, 2)
    },
  },
}));
export default function Welcome() {
  const classes = useStyles();
  let history = useHistory();

  return (

    <div style={{ display: 'flex', justifyContent: 'center', padding: 30, alignItems: "center" }}>
      <div className={classes.root} >
        <center><img src={img} alt="" /></center>
        <br></br> <br></br> <h2>Welcome to the demonstration, please click on any of the buttons. </h2>
        <center>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            onClick={() => {
              history.push("/hellodocker")
            }}
          >
            Docker
          </Button></center>
        <center>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            onClick={() => {
              history.push("/hellok8s")
            }}
          >
            k8s
          </Button></center>
        <center>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            onClick={() => {
              history.push("/helloeks")
            }}
          >
            EKS
          </Button></center>
        <center>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            onClick={() => {
              history.push("/hellojenkins")
            }}
          >
            Jenkins
          </Button></center>
          <center>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            preventDefault
            onClick={() => {
              history.push("/kanhadetails")
            }}
          >
            Kanha Details
          </Button></center>
        <br></br> <br></br>
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
