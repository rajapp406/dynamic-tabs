import { FormControl } from "@angular/forms";
import { DAFAULT_VALIDATE_COMPANY_EMAIL } from "../constants/generic.const";

export function validateEmail(company = DAFAULT_VALIDATE_COMPANY_EMAIL) {
    let EMAIL_REGEXP = `^[a-z_1-9]+@${company}$`;
    let regExObj = new RegExp(EMAIL_REGEXP, "g")
    return function (c: FormControl) {
        return regExObj.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        }
    }
}

export function validatePassword(c: FormControl) {
    let EMAIL_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return EMAIL_REGEXP.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    }
}
