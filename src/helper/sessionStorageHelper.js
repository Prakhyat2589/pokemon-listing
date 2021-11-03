const setSessionStorage = (key, value) => {
  if (value !== undefined && typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

const getSessionStorage = (key, defaultReturnValue = {}) => {
  return typeof window !== "undefined" && sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : defaultReturnValue;
};

export { setSessionStorage, getSessionStorage };
