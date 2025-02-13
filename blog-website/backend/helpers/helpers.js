import bcrypt from 'bcrypt';

export const createHashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const verifyPassword = async (currentPass, providedPass) => {
    return bcrypt.compare(currentPass, providedPass);
}

