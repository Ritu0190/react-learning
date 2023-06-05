
const validation = (values) => {
    let errors = {};

    if(!values.fullname) {
        errors.fullname = "Name is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Password is required"
    }

  return errors;
}

export default validation