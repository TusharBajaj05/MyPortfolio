export default function Validation(formData: any){
    interface errorTypes {
        name?: string,
        email?: string,
        message?: string,
    }

    let errors: errorTypes = {};

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!formData.name) {
        errors.name = "Name is required";
    }
    
    if(!formData.email) {
        errors.email = "Email is required";
    }
    else if (!pattern.test(formData.email)){
        errors.email = "Email is invalid";
    }
    if(!formData.message) {
        errors.message = "Message is required";
    }
    else if(formData.message.length < 10) {
        errors.message = "Message should be of minimum 10 letters"
    }

    return errors;
}