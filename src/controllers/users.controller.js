import { conn } from '../connection/conn.js';

export const getUsers = async (req, res) => {
  const { data, error } = await conn.from('Users').select('*');
  if (error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(200).json(data);
  }
};
