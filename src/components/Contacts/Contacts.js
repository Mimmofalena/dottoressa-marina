import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  CardContent,
  Card,
  Paper,
  Link,
} from "@mui/material";

import axios from "axios";

import useStyles from "../Utils/Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const Contacts = () => {
  console.log(process.env);
  const classes = useStyles();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Campo obbligatorio"),
    lastName: Yup.string().required("Campo obbligatorio"),
    email: Yup.string()
      .email("Formato mail non valido")
      .required("Campo obbligatorio"),
    message: Yup.string()
      .max(250, "Max caratteri 250")
      .required("Campo obbligatorio"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  return (
    <Card square className={classes.card} id="contattami">
      <CardContent>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
        />

        <Grid container direction="column" alignContent="center">
          <Grid item>
            <Typography textAlign="center" variant="h4" gutterBottom>
              Come contattarmi
            </Typography>

            <Paper elevation={2}>
              <Box p={1} mt={1} mb={1}>
                <Typography gutterBottom>
                  Per visite, richieste, esami e ricette invia una mail a &nbsp;
                  <Link href="mailto:tricolidoc@gmail.com">
                    tricolidoc@gmail.com
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  Per consulto medico indifferibile chiama &nbsp;
                  <Link href="tel:+39351-2530433">351-2530433</Link> o &nbsp;
                  <Link href="tel:+39091-520120">091-520120</Link>
                </Typography>
                <Typography gutterBottom>
                  <strong>NB:</strong> Le telefonate durante l'orario di visita
                  verranno visualizzate e si verrà ricontattati alla fine del
                  ricevimento ambulatoriale, nel rispetto del paziente in visita
                  e al fine di garantire un migliore ascolto.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Box p={1} mb={1}>
            <Typography p={1} gutterBottom variant="h5">
              <Link href="tel:+39091-520120">Studio: 091-520120</Link>
            </Typography>
            <Typography p={1} gutterBottom variant="h5">
              <Link href="tel:+39091-520120">Cel: 351-2530433</Link>
            </Typography>
            <Typography p={1} gutterBottom variant="h5">
              <Link href="mailto: tricolidoc@gmail.com">
                Mail: tricolidoc@gmail.com
              </Link>
            </Typography>
          </Box>

          <Box p={1} mb={1}>
            <Typography style={{ textAlign: "center" }} variant="h4">
              Invia una mail
            </Typography>
          </Box>
          <Formik
            // validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              const payload = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                message: values.message,
              };

              await axios
                .post("http://localhost:3000/api/form", payload)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200)
                    toast.success("Messaggio inviato con successo");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("Si e' verificato un errore!");
                });
            }}
          >
            {(formik) => {
              return (
                <>
                  <Form onSubmit={formik.handleSubmit} className={classes.form}>
                    <Field
                      className={classes.inputField}
                      as={TextField}
                      id="firstName"
                      name="firstName"
                      type="text"
                      label="Nome"
                      variant="outlined"
                    ></Field>
                    <ErrorMessage name="firstName">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>

                    <Field
                      className={classes.inputField}
                      as={TextField}
                      id="lastName"
                      name="lastName"
                      type="text"
                      label="Cognome"
                      variant="outlined"
                    />
                    <ErrorMessage name="lastName">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>

                    <Field
                      className={classes.inputField}
                      as={TextField}
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                    />

                    <ErrorMessage name="email">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>

                    <Field
                      className={classes.inputField}
                      as={TextField}
                      id="message"
                      name="message"
                      type="text"
                      label="Messaggio"
                      multiline={true}
                      rows={6}
                      variant="outlined"
                      placeholder="Descrivi brevemente il tuo problema..."
                    />
                    <ErrorMessage name="message">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>

                    <Box p={1} textAlign="center">
                      <Button
                        disabled={formik.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Submit
                      </Button>
                    </Box>
                  </Form>
                </>
              );
            }}
          </Formik>
        </Grid>
      </CardContent>
      <Typography p={1}>
        Causa alto volume di mails, esse verranno elaborate entro 24-48h durante
        gli orari lavorativi.
      </Typography>
    </Card>
  );
};

export default Contacts;
