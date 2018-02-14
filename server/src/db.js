import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  database: "blog",
  user: "bloguser",
  password: "blahblah"
});

connection.connect();

export let getBlogs = () => {
  return new Promise((resolve, reject) => {
    connection.query("CALL GetAllBlogs()", (err, res, fields) => {
      if (err) {
        reject();
        // connection.end();
        return console.log(err);
      }
      resolve(res);
      console.log(res);
      // connection.end();
    });
  });
};

export let getBlog = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT b.title, b.content, b._created FROM blogs b WHERE b.id = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res[0]);
        console.log("Retrieved Blog!");
      }
    );
  });
};

export let postBlog = blog => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO blogs (title, content) VALUES ('${blog.title}', '${
        blog.content
      }')`,
      (err, res, fields) => {
        if (err) {
          reject();
          // connection.end();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};

export let deleteBlog = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM blogs WHERE ID = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};

export let updateBlog = (id, title, content) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE blogs SET title = "${title}", content = "${content}" WHERE id = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};
