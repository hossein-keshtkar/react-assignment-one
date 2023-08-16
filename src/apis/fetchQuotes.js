export const fetchQuotes = async () => {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
