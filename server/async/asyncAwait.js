import fs from "fs/promises";

async function getData() {
  try {
    const users = await fs.readFile("users.json", "utf8");
    console.log(users);
    console.log("=======================================");
    const posts = await fs.readFile("post.json", "utf8");
    console.log(posts);
    console.log("=======================================");
    const comments = await fs.readFile("comments.json", "utf8");
    console.log(posts);
    console.log("=======================================");
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}
getData();
