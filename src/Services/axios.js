import Axios from "axios";
export const callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};
