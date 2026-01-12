import path, { dirname } from "path";
import url from "url";

const filePath = "desktop/mernstack/README.md";

// basename
console.log(path.basename(filePath));
// dirname
console.log(path.dirname(filePath));
// extension name: extname
console.log(path.extname(filePath));
// parse
console.log(path.parse(filePath));

//url method to find the full path of working directory
const __filename = url.fileURLToPath(import.meta.url);
//path method to find path of the working dir
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
