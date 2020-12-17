import * as yup from 'yup';

export default yup.object().shape({
    name: yup
     .string()
     .required("Name is required."),
    email: yup
     .string()
     .email("Must be a valid email.")
     .required("Email is required."),
    password: yup
     .string()
     .min(8, "Password must be at least 8 character long.")
     .required("Password is required."),
    terms: yup
     .boolean()
     .oneOf([true], "You must accept Terms and Conditions"),
});