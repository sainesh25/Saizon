import axios, { AxiosError } from "axios";
import { constant } from "./constant";
import { toast } from "react-toastify";

const domain = 'http://localhost:5000' // DEVELOPMENT

const login = async (data: Object) => {
    try {
        const res = await axios.post(`${domain}${constant.LOGIN}`, data);
        return res;
    } catch (err) {
        console.log(err);
        let errorMessage = 'Error Occured';
        if (err instanceof AxiosError) {
            errorMessage = err?.response?.data?.message || err?.message || errorMessage
        }

        toast.error(`Error: ${errorMessage}`)
    }
}

const register = async (data: Object) => {
    try {
        const res = await axios.post(`${domain}${constant.REGISTER}`, data);
        return res;
    } catch (err) {
        console.log(err);
    }
}
export {
    login,
    register
}