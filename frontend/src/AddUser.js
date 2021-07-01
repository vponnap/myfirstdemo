import React from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import img from './logo192.png'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({

  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));
export default function AddUser() {

  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [name, setName] = React.useState("");
  const handleNameChange = event => setName(event.target.value);
  const [message, setMessage] = React.useState("");

  async function sampleFunc(toInput) {
    const response = await fetch("http://localhost:8090/users", {
      method: "POST", 
      mode: "cors",
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(toInput) 
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = variables => {
    const toInput = { name };
    sampleFunc(toInput);
    setName("");

  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }


  let history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br></br>
      <br></br>
      <div className={classes.paper}>
        <img src={img} alt="" />

        <br></br>
        <br></br>
        <center><h2>       User Details</h2>   </center>
        <br></br>
        <form className={classes.form} Validate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                value={name}
                label="Enter you name"
                name="name"
                autoComplete="name"
                onChange={handleNameChange}
              />
            </Grid>
            <p>&emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;   </p>

            <center>
{/*               <Button
                // type="submit"
                type="submit"
                variant="contained"
                color="primary"
                preventDefault
                className={classes.submit}
                onClick={handleSubmit}
              >
                Save
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <Button
                // type="submit"
                type="submit"
                variant="contained"
                color="primary"
                preventDefault
                className={classes.submit}
                onClick={() => {
                  history.push("/Welcome")
                }}
              >
               Enter
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </center>
            <center>
              <Button
                // type="submit"
                type="submit"
                variant="contained"
                color="primary"
                preventDefault
                className={classes.submit}
                onClick={() => {
                  history.push("/retrieve")
                }}
              >
                Search
          </Button>
            </center>
          </Grid>

        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          {message}
        </Typography>
      </div>
    </Container>
  );
}


/*

  return (

    <div className="App">

      <header className="App-header">
        <img href='./public/logo192.png'></img>
      </header>
        <p1>Please enter your name </p1>

      <form>
  <TextField id="name" label="Username" variant="filled" />
</form>

      <br></br>

      <container>
      <Button href="welcome.html" type="submit" color="lightBlue" ripple="light">Submit</Button><br></br>

      </container>

    </div>

  );
}

export default App;
 */