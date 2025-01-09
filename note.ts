import { globSync } from "node:fs";

const htmlFiles = globSync("dist/**/*.html");
console.log(htmlFiles);
