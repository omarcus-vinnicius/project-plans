import React from "react";

export const isValidEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    return regexEmail.test(email)
}



export const isValiidade= (Idade) => {
    const regexidade = /([0-9]{2})/
    return regexidade.test(Idade)
}


