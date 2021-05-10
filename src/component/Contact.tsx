import React from "react";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import {Form} from "react-final-form";
import {TextField, makeValidate } from 'mui-rff';
import i18n from "../i18n/i18nconfig";
import * as Yup from 'yup';

const useStyle = makeStyles({
  title: {
    fontWeight: "bold"
  },
  content: {
    minHeight: 200
  },
    submit: {
      marginTop: 10
    }
});

const formValidatorSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email(),
    content: Yup.string().required(),
});

export const Contact: React.FC = () => {
  const classes = useStyle();
  const validate = makeValidate(formValidatorSchema);

  function handleOnSubmit(values: any) {

  }

  return (
    <>
      <Typography variant={"h2"} color={"primary"} className={classes.title}>{i18n.t('contact.title')}</Typography>
      <Typography variant={"h2"} color={"secondary"} align={"right"} className={classes.title}>{i18n.t('contact.question')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form onSubmit={handleOnSubmit}
                validate={validate}
                render={({handleSubmit}) =>
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
                <Grid item xs={12}>
                  <TextField label={"Votre message"}
                             name={"content"}
                             variant={"outlined"}
                             InputProps={{
                               classes: {
                                 input: classes.content
                               }
                             }}
                             multiline={true}
                             fullWidth={true}
                             required={true}/>
                </Grid>
              </Grid>
                <Grid container alignItems={"center"} justify={"center"} direction={"column"} className={classes.submit}>
                    <Grid item xs={6}>
                        <Button type={"submit"} color={"primary"} variant={"contained"}>
                            Envoyer
                        </Button>
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