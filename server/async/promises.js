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
  });
