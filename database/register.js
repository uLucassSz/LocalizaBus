import user from "./model.js"

export default async (name, password, email, signature) => {

    const account = new user({ email, name, password, signature})
        .save()
        .then(doc => doc.toObject())
        .catch(err => {
            console.log(err)
            return { message: "Erro ao criar a conta" }
        })

    return account
}