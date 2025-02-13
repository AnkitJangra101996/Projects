import mongoose from "mongoose";

export const connectDb = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGOURL).then(() => {
            console.log('Connected With DB');
            resolve();
        }).catch((error) => {
            console.log('Connection Fail With DB', error);
            reject();
        })
    })
}
