const tailwindv3 =
  "https://v3.tailwindcss.com/docs/search-css?q=duration-300&du=3+months";

const urlObject = new URL(tailwindv3);

console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.pathname);

const params = new URLSearchParams(urlObject.search);
console.log(params);
params.set("du", "d-300");
console.log(params);

params.append("css property", "transition-duration");
console.log(params);
