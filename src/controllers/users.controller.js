import { conn } from '../connection/conn.js';

//* Funciones para consultar a todos los usuarios y a un usuario en específico
export const getUsers = async (req, res) => {
  const { data, error } = await conn.from('Users').select('*');
  if (error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(200).json(data);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await conn.from('Users').select('*').eq('id', id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Funcione para crear un usuario nuevo
export const createUser = async (req, res) => {
  const { name, lastName } = await req.body;

  try {
    const data = await conn.from('Users').insert({
      Name: name,
      LastName: lastName,
    });

    res.status(201).json({ message: 'User created', data });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//? Funcion para actualizar un usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;

  try {
    const { data } = await conn
      .from('Users')
      .update({
        Name: name,
        LastName: lastName,
      })
      .eq('id', id);

    res.status(200).json({ message: 'User updated', data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! Funcion para eliminar un usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await conn.from('Users').delete().eq('id', id);
    res.status(200).json({ message: 'User deleted', data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
