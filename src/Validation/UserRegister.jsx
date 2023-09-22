import * as yup from "yup";

export const userRegister = yup.object().shape({

    nome: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().min(6).max(20).required()
})