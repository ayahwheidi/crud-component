export const  ValidationUserData=(values)=>{

    let errors={};
 if (values.name.trim()==""){

errors.name="name is requierd";
 }
 else if(values.name.trim().length<3){
    errors.name="username must be at least 3 characters long"
 }

 if (values.email.trim()==""){

    errors.email="email is requierd";
     }
     else if(values.email.trim().length<9){
        errors.email="email must be at least 9 characters long"
     }

     if (values.password.trim()==""){

        errors.password="password is requierd";
         }
         else if(values.password.trim().length<3){
            errors.password="password must be at least 3 characters long"
         }

return errors;

}