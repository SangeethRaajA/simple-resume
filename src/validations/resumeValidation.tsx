import * as Yup from "yup";

const onlyAlphabetsRegex = /^[A-Za-z]+$/;
const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const ValidationSchema = Yup.object({
  firstname: Yup.string()
    .strict(true)
    .min(3, "First name is too short!")
    .max(16, "First name is too long!")
    .required("First name is required!")
    .matches(onlyAlphabetsRegex, "Should be only alphabets"),
  lastname: Yup.string()
    .strict(true)
    .min(3, "Last name is too short!")
    .max(16, "Last name is too long!")
    .required("Last name is required!")
    .matches(onlyAlphabetsRegex, "Should be only alphabets"),
  title: Yup.string()
    .strict(true)
    .min(3, "Title is too short!")
    .max(32, "Title is too long!")
    .required("Title is required!")
    .matches(onlyAlphabetsRegex, "Should be only alphabets"),
  phone: Yup.string()
    .required("Please Provide  a Phone Number")
    .matches(phoneNumberRegex, "Please enter a valid phone number"),
  mail: Yup.string()
    .strict(true)
    .email("Invalid Email Address!")
    .required("Email Address is required!"),
});

export default ValidationSchema;
