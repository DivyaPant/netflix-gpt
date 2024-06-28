export const emailAndPasswordValidator = (email, password)=>{
// Regex validation
// Email 
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
// Password
const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
console.log('here1', isEmailValid, isPasswordValid, email, password)
return {
    noError: isEmailValid && isPasswordValid,
    isEmailValid : isEmailValid,
    isPasswordValid: isPasswordValid
}
}