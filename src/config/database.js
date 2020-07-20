module.exports = {
  development: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "comercial",
  },
  staging: {
    use_env_variable: "DATABASE_URL",
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
