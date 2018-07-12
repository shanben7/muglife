function fromEnv(param) {
  const value = process.env[param];
  if (value == null)
    throw new Error(`Variable ${param} not found in the environment`);
  return value;
}

module.exports = {
  fromEnv
};
