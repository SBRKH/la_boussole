import React, {useState} from "react";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import {Form} from "react-final-form";
import {makeValidate, TextField} from 'mui-rff';
import i18n from "../i18n/i18nconfig";
import * as Yup from 'yup';
import {send} from "emailjs-com";
import {Success} from "../core/Success";
import {Error} from "../core/Error";

const useStyle = makeStyles({
  title: {
    fontWeight: "bold",
    textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
  },
  content: {
    minHeight: 200
  },
  submit: {
    marginTop: 10
  },
  test: {
    minWidth: "100%",
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
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [openError, setOpenError] = useState<boolean>(false);

  function handleOnSubmit(values: any) {
    const data = {
      name: values.name + " " + values.firstname,
      message: values.content,
      email: values.email,
      phone: values.phone,
    }

    send("service_mkaw9i8", "template_3ocmovn", data, "user_uxZQ12PsVSe8CPIEWxbVs").then(
      (response) => {
        setOpenSuccess(true);
        console.log(response.status, response.text);
      },
      (err) => {
        setOpenError(true);
        console.log(err);
      }
    );
  }

  return (
    <>
      <Typography variant={"h2"} color={"primary"} className={classes.title}>{i18n.t('contact.title')}</Typography>
      <Grid container className={classes.test}>
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
                        <TextField label={"Prénom"}
                                   name={"firstname"}
                                   variant={"outlined"}
                                   fullWidth={true}
                                   required={true}/>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField label={"Numéro de téléphone"}
                                   name={"phone"}
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
                    <Grid container alignItems={"center"} justify={"center"} direction={"column"}
                          className={classes.submit}>
                      <Grid item xs={6}>
                        <Button type={"submit"} color={"primary"} variant={"contained"}>
                          Envoyer
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                }/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={4}>
          <iframe title={"Map"}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.4997159346626!2d6.2151343155816035!3d46.180613679115964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c71aa4cfb7abf%3A0x39113b3aceabe59c!2sRestaurant%20La%20Boussole!5e0!3m2!1sfr!2sfr!4v1620672785961!5m2!1sfr!2sfr"
                  width="400" height="300" style={{border: 0}} allowFullScreen={true} loading={"lazy"}/>
        </Grid>
      </Grid>
      <Success open={openSuccess} onClose={() => setOpenSuccess(false)} message={"Votre demande de réservation a bien été envoyé!"} />
      <Error open={openError} onClose={() => setOpenError(false)} message={"Une erreur est survenue..."} />
    </>
  );
}