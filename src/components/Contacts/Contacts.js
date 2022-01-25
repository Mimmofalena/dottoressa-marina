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
} from "@mui/material";

import useStyles from "../Utils/Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_ID;

const Contacts = () => {
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
          <Box mb={2}>
            <Typography style={{ textAlign: "center" }} variant="h4">
              Contattami
            </Typography>
          </Box>

          <Formik
            onSubmit={(values, actions) => {
              console.log(actions);

              sendEmailHandler(values);
              actions.setSubmitting(false);
              actions.resetForm();
            }}
            validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(formik) => {
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

                    <Box textAlign="center">
                      <Button
                        disabled={formik.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
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
    </Card>
  );
};

export default Contacts;

// <ButtonGroup >

//        <Button  color='primary' variant="contained" href="tel:+39091520120"

//       startIcon={<PhoneAndroidIcon color='secondary' /> } ><Typography variant='button' color='textSecondary'>Chiama 091520120</Typography>

//       </Button>

//  <Button size='small' color='primary' variant='contained'>

//         <IconButton >
//         <PhoneAndroidIcon/>
//         <Typography variant='button' color='textSecondary'>Chiama 091520120</Typography>
//         </IconButton>
// </Button>
// <Button color='primary' variant='contained'>

//         <IconButton >
//         <PhoneAndroidIcon/>
//         <Typography variant='button' color='textSecondary'>Chiama 091520120</Typography>
//         </IconButton>
// </Button>

//         <Button color='primary' variant="contained" href="tel:+393512530433"

//       startIcon={< PhoneAndroidIcon/> } >Chiama 3512530433</Button>
//        </ButtonGroup>
