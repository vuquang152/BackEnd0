import getConnection from 'config/db';

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    const sql = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?,?,?)';
    const values = [name, email, address];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user');
  } finally {
    // connection.release();
  }
};

const getAllUsers = async () => {
  const connection = await getConnection();
  try {
    const [results, fields] = await connection.query('SELECT * FROM users');
    return results;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting users');
  } finally {
    // connection.release();
  }
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = 'DELETE FROM `users` WHERE id = ?';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Error deleting user');
  } finally {
    // connection.release();
  }
};

const getUserById = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = 'SELECT * FROM `users` WHERE id = ?';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result[0];
  } catch (error) {
    console.log(error);
    throw new Error('Error deleting user');
  } finally {
    // connection.release();
  }
};

const updateUserById = async (
  id: string,
  name: string,
  email: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    const sql =
      'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
    const values = [name, email, address, id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Error deleting user');
  } finally {
    // connection.release();
  }
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
