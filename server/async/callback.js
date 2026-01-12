//callback
//A function that is used as a parameter.it is callback function.
//higher order function is a function that takes function as it's parameter

import fs from "fs";

//callback hell
fs.readFile("users.json", "utf8", (uError, users) => {
  if (uError) return uError;
  const uList = JSON.parse(users);
  fs.readFile("post.json", "utf8", (Perror, posts) => {
    if (Perror) return Perror;
    const pList = JSON.parse(posts);
    const result = uList.map((users) => {
      return {
        ...users,
        post: pList
          .map((pList) => (users.id == pList.id ? pList : null))
          .filter(Boolean),
      };
    });
    console.log(result);

    fs.readFile("comments.json", "utf8", (cError, comment) => {
      if (cError) return cError;

      const cList = JSON.parse(comment);
      const cresult = cList.map((users) => {
        return {
          ...users,
          comments: uList
            .map((cList) => (users.id == cList.id ? cList : null))
            .filter(Boolean),
        };
      });
      console.log(cresult);
    });

    return;
  });
});
