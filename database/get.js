import user from "./model.js"

export default async (userlogin, password) => {

    if (!userlogin && !password) return { message: "Nenhuma conta foi encontrada" }

    const data = await user.findOne({ name: userlogin }) || await user.findOne({ email: userlogin })
        .catch(err => {
            console.log(err)
            return null
        })
    if (!data) return { message: "Nenhuma conta foi encontrada" }
    if (password == data.password) return data
    return { message: "Dados da conta não combinam" }
}