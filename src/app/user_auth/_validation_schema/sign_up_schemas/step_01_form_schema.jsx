import * as Yup from "yup";

const Step01FormSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default Step01FormSchema;
