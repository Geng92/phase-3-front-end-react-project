import React from "react";

export default function Destination ({ destination, onVisitDestination }) {

    const { id, location, climate, image, population, visited } = destination;

    const handleVisitDestination = () => {
        fetch(`http://localhost:9292/destinations/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ visited: !visited }),
        })
          .then((res) => res.json())
          .then(onVisitDestination);
      };

    return (
        <div class = "destination_card">
            <img class="image" src={image} alt="img"/>
            <p>{location}</p>
            <p>{climate}</p>
            <p>{population}</p>
            {visited ? (
          <button onClick={handleVisitDestination} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleVisitDestination} className="emoji-button favorite">☆</button>
        )}
        </div>
    )
}