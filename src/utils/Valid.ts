import { IUserRegister } from "./TypeScript"
export const validRegister = (validRegister : IUserRegister)  => {
    const  {userId, firstName, lastName, position, email, password, passwordConfirmation} = validRegister
    const errors: string[] = []

    if (!userId) {
        errors.push( "Please add your User ID.");
      } else if (userId.length > 5) {
        errors.push( "Your User ID must be 5 digits.");
      } else if (userId.length < 5) {
        errors.push( "Your User ID must be 5 digits.");
      }
      if(!firstName){
        errors.push("Please add your name")
    } else if( firstName.length > 20 ) {
        errors.push("Your name is up to 20 chars long")
    }
    
    if(!lastName){
        errors.push("Please add your surname")
    } else if( lastName.length > 20 ) {
        errors.push("Your surname is up to 20 chars long")
    }
    
    if(!position){
        errors.push("Please select your position")
    } 
    
    if(!email){
        errors.push("Please add your email address")
    } else if( !validateEmail(email)){
        errors.push("Your email is not valid")
    }
    
    if(password.length < 8){
        return errors.push("Password must be at least 8 chars.")
    
} else if(password !== passwordConfirmation) {
    errors.push("Passwords do not match")
}

return {
    errMsg: errors,
    errLength: errors.length
}

}



function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}