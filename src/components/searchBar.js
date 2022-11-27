import React from "react";
import axios from "axios";
import "../App.css";

const searchBar = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [books, setBooks] = React.useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length > 2) {
      axios
        .get(`books/${e.target.value}`)
        .then((response) => {
          if (response.data.status) {
            setBooks(response.data.data);
          } else {
            console.log(response.data)
          }
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
      />
      {books.length > 0 ?
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book Id</th>
                <th scope="col">ISBN</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {books.map((row, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{row.bookId}</td>
                  <td>{row.isbn}</td>
                  <td>{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> : <h2>No Book Found</h2>
      }
    </div>
  );
};

export default searchBar;
