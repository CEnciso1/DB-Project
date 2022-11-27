export const BooksQueries = {
  GetBooks: `
    SELECT 
      bookId,
      isbn,
      title
    FROM 
      books
    WHERE 
      title LIKE ? `,
  
  InsertLoan: 
    `INSERT INTO book_loans (Card_id, Date_out, Due_date)
    VALUES (?,?,?)`,
};
