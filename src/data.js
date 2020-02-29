export const ACCOUNT_TYPES = [
  { id: 1, title: "Doctor", pic: "asset/img_doctor_90@3x.svg" },
  {
    id: 2,
    title: "Patient",
    pic: "asset/img_patient_90@3x.svg"
  },
  { id: 3, title: "Doctor", pic: "asset/img_doctor_90@3x.svg" },
  { id: 4, title: "Patient", pic: "asset/img_patient_90@3x.svg" }
];
export const DESC_LISTS = [
  "Hello doctor!",
  "Please fill out the form below to get started"
];
export const FORM_ELEMENTS = [
  {
    htmlTag: "input",
    type: "text",
    name: "email",
    icon: "icon-mail",
    placeholder: "Username",
    title: "Email",
    link: null
  },
  {
    htmlTag: "input",
    type: "password",
    name: "password",
    icon: "icon-key1",
    placeholder: "Password",
    title: "Password",
    link: { name: "Forgot?", href: "/" }
  }
];
