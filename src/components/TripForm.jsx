import React, {useState} from 'react';

const emptyForm ={ date: "", traveler_id: "", destination_id: "" }

export default function TripForm ({onAddTrip}) {
    const [formData, setFormData] = useState(emptyForm);
    //const history = useHistory();
    //useHistory for router
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTrip = {
          date: formData.date,
          traveler_id: formData.traveler_id,
          destination_id: formData.destination_id
        };
        fetch("http://localhost:3001/trips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTrip),
        })
          .then((res) => res.json())
          .then((newTrip) => {
            onAddTrip(newTrip);
            //history.push("/trips");
          });
    };    
    
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h1>ADD YOUR OWN TRIP!</h1>
            <input type="text" id="name" name="date"/>
            
            <input 
                type="text" 
                id="date" 
                name="date" 
                value={date}
                onChange={handleChange}
            />

            <input 
                type="text" 
                id="destination_id" 
                name="destination" 
                value={destination_id} 
                onChange={handleChange}
            />
        </form>
    </div>
    )
}