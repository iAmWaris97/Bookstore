const bookDetails = (detail) => {
  const { title, author, ids } = detail;
  return {
    id: ids,
    title,
    authors: author,
  };
};
export default bookDetails;
