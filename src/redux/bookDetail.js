const bookDetails = (detail) => {
  const { title, author, category } = detail;
  return {
    id: title,
    title,
    categories: category,
    authors: author,
  };
};
export default bookDetails;