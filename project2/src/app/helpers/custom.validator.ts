import { FormGroup } from '@angular/forms';

export function checkNum(){
    return function(myForm:FormGroup){
        let a = myForm.controls['contact'];
    
        if(isNaN(a.value)){
            a.setErrors({ numErr : true });
        }
    }
}

export function checkSize(){
    return function(abc: FormGroup){
        let a = abc.controls['contact'];

        if(a.errors && ! a.errors['sizeErr']){
            return;
        }

        console.log(a.value.length);
        if(a.value.length != 10){
            a.setErrors({ sizeErr: true});
        }
    }
}

export function checkPass(){
    return function(abc : FormGroup){
        let a = abc.controls['password'];
        let b = abc.controls['re_password'];

        if(b.errors && ! b.errors['passErr']){
            return;
        }

        if(a.value != b.value){
            b.setErrors({ passErr : true });
        }
    }
}