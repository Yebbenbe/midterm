const getUsers = function (db) {
  return db
    .query(`SELECT * FROM users;`)
    .then((data) => {
      const users = data.rows;
      return response.rows;
    })
    .catch((error) => console.log(error));
};

const getUserById = (db, id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};


const addUser = function (user) {
  const query = `
    INSERT into users (name, email, password)
    VALUES($1, $2, $3) RETURNING *;
    `;
  const values = [user.name, user.email];

  return db
    .query(query, values)
    .then((res) => res.rows[0]);
};


module.exports = { getUsers, getUserById, addUser };