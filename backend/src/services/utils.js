const isArray = (data) => {
  return Object.values(data).map((value) => {
    if (Array.isArray(value)) {
      return JSON.stringify(value);
    }
    return value;
  });
};

module.exports = { isArray };
