import user from "./model.js"

export default async (name, password, email, signature, phone, cpf, birthday) => {

    const account = new user({ email, name, password, signature, phone, cpf, birthday})
        .save()
        .then(doc => doc.toObject())
        .catch(err => {
            console.log(err)
            return { message: "Erro ao criar a conta" }
        })

    return account
}