import React from "react";


export const isValiidade= (Idade) => {
    const regexidade = /([0-9]{2})/
    return regexidade.test(Idade)
}


