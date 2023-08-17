export const fetchQuotes = async () => {
  const api = process.env.REACT_APP_API;

  try {
    const res = await fetch(api);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
