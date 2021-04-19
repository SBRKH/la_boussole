import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Form} from "react-final-form";
import {TextField} from 'mui-rff';

const useStyle = makeStyles({
  title: {
    fontWeight: "bold"
  },
  test: {
    color: "#fff",
  }
});

export const Contact: React.FC = () => {
  const classes = useStyle();

  function handleOnSubmit(values: any) {

  }

  return (
    <>
      <Typography variant={"h2"} color={"primary"} className={classes.title}>Nous contacter</Typography>
      <Typography variant={"h2"} color={"secondary"} align={"right"} className={classes.title}>Une question
        ?</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form onSubmit={handleOnSubmit} render={({handleSubmit}) =>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label={"Nom"}
                             name={"name"}
                             variant={"outlined"}
                             fullWidth={true}
                             required={true}/>
                </Grid>
                <Grid item xs={6}>
                  <TextField label={"Email"}
                             name={"email"}
                             variant={"outlined"}
                             fullWidth={true}
                             required={true}/>
                </Grid>
              </Grid>
            </form>
          }/>
        </Grid>
        <Grid item xs={6}>
          blablable
        </Grid>
      </Grid>
    </>
  );
}