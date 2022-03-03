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

import emailjs from "emailjs-com";
import OrariStudio from "./OrariStudio";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_ID;

const Contacts = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const handleSend = async () => {};

  const sendEmailHandler = (object) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, object, USER_ID).then(
      (result) => {
        toast.success("Messaggio inviato con successo");
      },
      (error) => {
        toast.error("Si e' verificato un errore!");

        console.log(error);
      }
    );
  };

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
            <Typography textAlign="center" variant="h4" gutterBottom>
              Orari Studio per appuntamento
            </Typography>
          </Box>

          <OrariStudio />

          <Box p={1} mb={1}>
            <Typography
              gutterBottom
              style={{ textAlign: "center" }}
              variant="h4"
            >
              Contatti
            </Typography>
            <Typography p={1} gutterBottom align="center" variant="h5">
              <Link href="tel:+39091-520120">091-520120</Link>
            </Typography>
            <Typography p={1} gutterBottom align="center" variant="h5">
              <Link href="tel:+39091-520120">Cel: 351-2530433</Link>
            </Typography>
            <Typography p={1} gutterBottom align="center" variant="h5">
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
                .post(
                  "http://localhost:3000/dottoressa-marina/send_mail",
                  payload
                )
                .then((res) => {
                  console.log(res);
                  if (res.status === 200)
                    toast.success("Messaggio inviato con successo");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("Si e' verificato un errore!");
                });
              // .finally(actions.setSubmitting(false));
              //   const data = response.then((data) => data);
              //   console.log(response);
              //   console.log(data);
              // } catch (err) {
              //   console.log(err);
              // } finally {
              //   actions.setSubmitting(false);
              // }

              // console.log(values);
              // await axios
              //   .post(
              //     "http://localhost:3000/dottoressa-marina/send_mail",
              //     payload
              //   )
              //   .then((res) => {
              //     console.log("ASOIDJASOIDAJSOIDAJDOS");
              //     if (res.status === 200) {
              //       actions.setStatus({
              //         sent: true,
              //         msg: "Message has been sent successfully!",
              //       });
              //     }
              //     console.log("ASOIDJASOIDAJSOIDAJDOS");
              //     // console.log(res);
              //     // toast.success("Messaggio inviato con successo");
              //     alert("SUCCESSO");
              //   })
              //   .catch((err) => {
              //     actions.setStatus({
              //       sent: false,
              //       msg: `Error! ${err}. Please try again later`,
              //     });
              //     // console.log(err);
              //     // toast.error("Si e' verificato un errore!");
              //     alert("DECESSO");
              //   })
              //   .finally(actions.setSubmitting(false));

              // actions.setSubmitting(false);
              // console.log(actions);
              // actions.setSubmitting(false);
              // actions.resetForm();
            }}
          >
            {(formik) => {
              // console.log(formik);
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

          {/* <Formik
            onSubmit={(values, actions) => {
              sendEmailHandler(values);
              actions.setSubmitting(false);
              actions.resetForm();
            }}
            validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(formik) => {
              console.log(formik.values);
              return (
                <>
                  <Form className={classes.form}>
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
          </Formik> */}
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
