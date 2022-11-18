import React, {useState} from 'react';

const emptyForm = {
   first_name: "", 
   last_name: "", 
   image: "",  
  }

export default function TravelerForm ({onAddTraveler}) {
    const [formData, setFormData] = useState(emptyForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTraveler = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          image: formData.image,
        };
        fetch("http://localhost:9292/travelers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTraveler),
        })
          .then((res) => res.json())
          .then((newTraveler) => {
            onAddTraveler(newTraveler);
          });
    };    
    
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3>ADD YOURSELF TO THE CARAVAN!</h3>
            
            <input 
                type="text" 
                id="first_name" 
                name="first_name"
                placeholder="First Name" 
                value={formData.first_name}
                onChange={handleChange}
            />

            <input 
                type="text" 
                id="last_name" 
                name="last_name"
                placeholder="Last Name" 
                value={formData.last_name} 
                onChange={handleChange}
            />

            <input 
                type="text" 
                id="image" 
                name="image" 
                placeholder="Your Profile Image" 
                value={formData.image} 
                onChange={handleChange}
            />
        <button type="submit">Add Yourself!</button>
        </form>
    </div>
    )
}