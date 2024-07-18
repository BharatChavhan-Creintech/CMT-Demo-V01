import * as Yup from "yup";

export const signUpData = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password  is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export const fpSchemas = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

export const step1Schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
  .required("Phone number is required")
  .matches(/^[0-9]+$/, "Phone number is not valid")
  .min(10, "Phone number should be at least 10 digits"),
  option: Yup.string().required("Required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message is too short - should be 10 chars minimum"),
});

export const step2Schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars minimum"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .min(10, "Phone number should be at least 10 digits"),
  committeeActivity: Yup.string().required(
    "Please select a committee activity"
  ),
  option: Yup.string().required("Please select an option"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message is too short - should be 10 chars minimum"),
});

export const step3Schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars minimum"),
  recommendations: Yup.array()
    .of(Yup.string())
    .required("Minimum one selection is required")
    .min(1, "Please select at least one recommendation"),
});
