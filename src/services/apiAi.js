/* eslint-disable react-hooks/rules-of-hooks */
import { api } from "../features/lib/utills";

const aiResponse = async (prompt, type, recipt, tone, length, language) => {
    try {
        const token = localStorage.getItem('token')
        const res = await api.post('/prompt',
            { prompt, type, recipt, tone, length, language },
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }

        )
        console.log("ai response", res);

        return res.data
    }
    catch (err) {
        console.log('Prompt api faildes', err);
    }
}

export default aiResponse