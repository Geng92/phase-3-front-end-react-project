import React, {useState} from 'react';

const emptyForm = {
   location: "", 
   climate: "", 
   image: "", 
   population: "" 
  }

export default function DestinationForm ({onAddDestination}) {
    const [formData, setFormData] = useState(emptyForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newDestination = {
          location: formData.location,
          climate: formData.climate,
          image: formData.image,
          population: formData.population
        };
        fetch("http://localhost:9292/destinations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDestination),
        })
          .then((res) => res.json())
          .then((newDestination) => {
            onAddDestination(newDestination);
          });
    };    
    
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3>ADD YOUR OWN DESTINATION!</h3>
            
            <input 
                type="text" 
                id="location" 
                name="location"
                placeholder='Location' 
                value={formData.location}
                onChange={handleChange}
            />

            <input 
                type="text" 
                id="climate" 
                name="climate" 
                placeholder='Climate'
                value={formData.climate} 
                onChange={handleChange}
            />

            <input 
                type="text" 
                id="image" 
                name="image" 
                placeholder='Send us a great image!'
                value={formData.image} 
                onChange={handleChange}
            />

            <input 
                type="number" 
                id="population" 
                name="population" 
                placeholder="Population"
                step="10000"
                value={formData.population} 
                onChange={handleChange}
            />
            <button type="submit">Add A place</button>
        </form>
    </div>
    )
}