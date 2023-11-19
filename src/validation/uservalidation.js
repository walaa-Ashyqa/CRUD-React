import React from 'react'

const uservalidation = (user) => {
    let errors = {};

    if (user.name.trim() == "") {
        errors.name = "User Name is Required!"
    } else if (user.name.trim().length < 3) {
        errors.name = "User Nmae  must be at least 3 chars";
    }
    if (user.email.trim() == "") {
        errors.email = "User Email is Required!"
    } else if (user.email.trim().length < 10) {
        errors.email = "User Email must be at least 10 chars";
    }

    if (user.password.trim() == "") {
        errors.password = "User Password is Required!"
    } else if (user.password.trim().length < 5) {
        errors.password = "User Password  must be at least 5 chars";
    }
    return errors;
}

export default uservalidation