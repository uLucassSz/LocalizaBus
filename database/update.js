// Importe o modelo de usuário do seu arquivo model.js
import user from "./model.js";

export default async (id, inputName, inputEmail, inputPass, inputTel, inputCPF, inputDate) => {
    // Verifique se o ID do usuário foi fornecido
    if (!id) return { message: "ID do usuário não fornecido" };

    // Verifique se pelo menos um campo de atualização foi fornecido
    if (!inputName && !inputEmail && !inputPass && !inputTel && !inputCPF && !inputDate) {
        return { message: "Nenhum campo de atualização fornecido" };
    }

    try {
        // Consulte o usuário com base no ID
        const existingUser = await user.findOne({ _id: id });

        // Se o usuário não existe, retorne uma mensagem de erro
        if (!existingUser) return { message: "Usuário não encontrado" };

        // Atualize os campos se os novos valores forem fornecidos
        if (inputName) existingUser.name = inputName;
        if (inputEmail) existingUser.email = inputEmail;
        if (inputPass) existingUser.password = inputPass;
        if (inputTel) existingUser.phone = inputTel;
        if (inputCPF) existingUser.cpf = inputCPF;
        if (inputDate) existingUser.dob = inputDate;

        // Salve as alterações no banco de dados
        await existingUser.save();

        // Retorne uma mensagem de sucesso
        return { message: "Informações do usuário atualizadas com sucesso" };
    } catch (error) {
        console.error("Erro ao atualizar informações do usuário:", error);
        return { message: "Erro ao atualizar informações do usuário" };
    }
};
