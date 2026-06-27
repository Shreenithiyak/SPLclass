import { useState } from "react";

const Task3 = () => {
  const movies = [
    { id: 1, name: "Leo", price: 200 },
    { id: 2, name: "Jailer", price: 180 },
    { id: 3, name: "GOAT", price: 250 },
  ];

  const [selectedMovie, setSelectedMovie] = useState("");
  const [seat, setSeat] = useState("");
  const [total, setTotal] = useState(0);

  const handleBooking = (e) => {
    e.preventDefault();

    const movie = movies.find((m) => m.id === Number(selectedMovie));

    if (movie) {
      setTotal(movie.price * Number(seat));
    }
    alert("Ticket Booked Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Ticket Booking</h1>

      <form onSubmit={handleBooking}>
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)} >
          <option value="">Select Movie</option>

          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.name} - ₹{movie.price}
            </option>
          ))}
        </select>

        <br />
       <br />
        <input type="number"placeholder="Enter Seats"value={seat}onChange={(e) => setSeat(e.target.value)} />
       
        <br />
        <br />
        <button type="submit">Book Ticket</button>
      </form>

      {/* {total > 0 && (
        <div
          style={{
            border: "1px solid gray",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>Booking Summary</h2>

          <p>
            Movie:{" "}
            {movies.find((m) => m.id === Number(selectedMovie)).name}
          </p>

          <p>Seats: {seat}</p>

          <p>Total Amount: ₹{total}</p>
        </div> */}
      {/* )} */}
    </div>
  );
};

export default Task3;