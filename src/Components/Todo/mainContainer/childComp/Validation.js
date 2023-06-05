
const validation = (values) => {
    let errors = {};

    if(!values.title) {
        errors.title = "Name is required"
    }
    if(!values.date) {
        errors.date = "Date is required"
    }
    if(!values.desc) {
        errors.desc = "Discription is required"
    }

  return errors;
}

export default validation