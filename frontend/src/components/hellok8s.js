import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


export default function hellok8s() {

  return (

    <div style={{ display: 'flex', justifyContent: 'center', padding: 30, alignItems: "center" }}>
      <div  >
        <br></br> <br></br> <h2>Welcome to K8S Session </h2>
        <center>

        <Link  to="/Welcome">
        {" "}
        <Button align="center">
          &#x2190; Return
        </Button>{" "}
      </Link>
        </center>

      </div>
    </div>

  );
}
