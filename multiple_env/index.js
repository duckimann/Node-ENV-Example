const env = process.argv.slice(2)[0];

require("custom-env").env((env) ? env : undefined);
console.log(process.env);