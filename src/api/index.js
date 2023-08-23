const initialdata = async (count) => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const result = await response.json();
  return result;
};

export { initialdata };
