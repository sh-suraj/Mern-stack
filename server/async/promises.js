import fs from "fs/promises";
//promise type
/**
 * 1. Pending: success? failure,
 * 2. Resolved : success,
 * 3. Rejected : failure
 */
fs.readFile("data.txt", "utf8")
  .then((data) => {
    //success
    console.log(data);
  })
  .catch((error) => {
    //error
    console.log(error);
  })
  .finally(() => {
    console.log("fs readfile has been excecuted");
  });

fs.readFile("users.json", "utf8")
  .then((users) => {
    //success
    console.log(users);
    return fs.readFile("post.json", "utf8");
  })
  .then((posts) => {
    console.log(posts);
    return fs.readFile("comments.json", "utf8");
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    //error
    console.log(error);
  });
