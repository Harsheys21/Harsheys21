import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Grid, Box, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';

// contact form code
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    message: yup
        .string("Enter your message")
        .required("Message is required"),
    subject: yup
        .string("Enter your subject")
        .required("Subject is required"),
});

const Contact = () => {
    // media query for responsive design
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    // contact form code
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Replace with your EmailJS service ID and template ID
                const serviceId = 'service_ihvb6zc';
                const templateId = 'template_axaf6i1';

                // Prepare the email data
                const emailData = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    subject: values.subject,
                };

                // Send the email using EmailJS
                const response = await emailjs.send(serviceId, templateId, emailData, "UdAZQxuR2gwSbjqTx");

                if (response.status === 200) {
                    alert('Email sent successfully!');
                } else {
                    alert('Email sending failed. Please try again later.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email. Please try again later.');
            }
        },
    });

    return (
        <>
            {/* contact form code */}
            <Box
                sx={{
                    margin: "auto",
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    width: "80%",
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    padding: '2%',
                    gap: '2%',
                }}
            >
                <Grid container direction="column" justifyContent="space-around" sx={{ flex: 1 }}>
                    <Typography variant="h5" align='center' textTransform="uppercase">
                        Get in touch
                    </Typography>
                    <Typography variant="h5" align='center' textTransform="uppercase">
                        <LocalPhoneIcon fontSize='small' /> PHONE:
                    </Typography>
                    <Typography variant="subtitle1" align='center' textTransform="uppercase">
                        669 - 266 - 8719
                    </Typography>
                    <Typography variant="h5" align='center' textTransform="uppercase">
                        <EmailIcon /> EMAIL:
                    </Typography>
                    <Typography variant="subtitle1" align='center' textTransform="uppercase">
                        jha.harsh21@gmail.com
                    </Typography>
                </Grid>
                <form onSubmit={formik.handleSubmit} style={{ flex: 1 }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                placeholder='YOUR NAME'
                                label="Name"
                                name="name"
                                type="text"
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                placeholder='YOUR EMAIL'
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="subject"
                                placeholder='HELLO THERE'
                                name="subject"
                                label="Subject"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                helperText={formik.touched.subject && formik.errors.subject}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="message"
                                placeholder='ENTER MESSAGE...'
                                name="message"
                                label="Message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button sx={{ marginBottom: "10vh" }} color="primary" variant="contained" type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
}

export default Contact;
