import { FormGroup } from '@angular/forms';

export const checkPass = ()=>{
    return (myForm : FormGroup)=>{
        let a = myForm.controls['password'];
        let b = myForm.controls['re_password'];
        if(b.errors && !b.errors['passErr']){
            return;
        }


        if(a.value != b.value)
        {
            b.setErrors({ passErr : true });
        }
    }
}