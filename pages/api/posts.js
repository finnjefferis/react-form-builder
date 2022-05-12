import { data } from "./dummyFormData";

export default function handler(req, res) {
  const {method} = req;

  if (method === "GET") {
    return res.status(200).json(data);
  }

  if (method === "POST") {
    const { body } = req;
    data.push({body});
    return res.status(200).json(data);
  }
  

  }