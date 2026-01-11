import fs from "fs";

// flie handling in node js: synchryonously & Achryonchonously

// synchronous

// READ
// const result = fs.readFileSync("data.txt", "utf8");
// console.log(result);

// const img = fs.readFileSync("a.jpg", "base64");
// console.log(img);

// WRITE
// fs.writeFileSync(
//   "data.txt",
//   "this is the written text from the fs in node js."
// );

// UPDATE
// fs.appendFileSync("data.txt", "Hello this is updated.");

// DELETE
// unlink:remove only the file
//rm- rmSync-removes file & rmdirSync- remove file and folder

// fs.unlinkSync("data.txt");

// Asynchronous

// WRITE
fs.writeFile(
  "data.txt",
  "this is the written text from the fs in node js.",
  (error, data) => {
    if (error) {
      console.log(error);
      return;
    } else console.log("File has been written!");
  }
);
// console.log("hello");

// UPDATE
fs.appendFile("data.txt", "\nHello this is updated.", (error, data) => {
  if (error) {
    console.log(error);
    return;
  } else console.log("File has been appended succesfully");
});

// READ
fs.readFile("data.txt", "utf8", (error, result) => {
  if (error) return error;
  else console.log(result);
});

// DELETE
// unlink:remove only the file
//rm- rmSync-removes file & rmdirSync- remove file and folder

fs.rm("data.txt", (error, msg) => {
  if (error) {
    console.log(error);
    return;
  } else console.log("file has been removed succesfully");
});
