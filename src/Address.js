import React from "react";

export default function Address(props) {
  const addresses = {
    bengaluru: {
      address: "no.3,3rd cross,Jayanagar 8th block Bengaluru-41",
      contact: 987654321,
      email: "blr@galaxystore.com",
    },
    chennai: {
      address: " Near Pothis, T Nagar,Chennai -67",
      contact: 765432190,
      email: "chnblr@galaxystore.com",
    },
    delhi: {
      address: "19, Ansari Rd, Daryaganj, New Delhi, Delhi 110002",
      contact: 123283333,
      email: "dlh@galaxystore.com",
    },
    hyderabad: {
      address: "Sigma Mall,Hypercity, Hyderbad-66",
      contact: 6789054278,
      email: "hyd@galaxystore.com",
    },
    mumbai: {
      address:
        "45, Ground Floor, Flora Fountain Somaiya Bhavan, 47, Mahatma Gandhi Road, Fort, Mumbai, Maharashtra 400001",
      contact: 976543219,
      email: "mum@galaxystore.com",
    },
  };
  const city = props.match.params.city;
  const addr = addresses[city];
  if (addr)
    return (
      <div>
        <h2> Store Location at {city}</h2>
        <p>{addr.address}</p>
        <p>{addr.contact}</p>
        <p>{addr.email}</p>
      </div>
    );
  else return <div>We dont have presence at {city}</div>;
}
