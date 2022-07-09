const path = require("path");
const fs = require("fs");

const { compilerOptions } = JSON.parse(fs.readFileSync("./tsconfig.json").toString());

const allAlias = Object.fromEntries(Object.entries(compilerOptions.paths).map(([alias, [aliasPath]]) => [
  alias.replace("/*", ""),
  path.resolve(__dirname, aliasPath.replace("*", ""))
]));

module.exports = {
  target: "electron-renderer",
  webpack: {
    alias: allAlias
  }
};
