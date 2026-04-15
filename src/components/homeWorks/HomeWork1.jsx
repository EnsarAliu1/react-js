import React, { useState } from "react";

function HomeWork1() {
  const veturatNeShitje = [
    {
      id: 1,
      img: "../../../public/porche-911.jpg",
      name: "Porsche 911",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      id: 2,
      img: "../../../public/bmw-m3.jpg",
      name: "BMW M3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      id: 3,
      img: "../../../public/bmw-m5.jpg",
      name: "BMW M5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      id: 4,
      img: "../../../public/fiat.jpg",
      name: "Fiat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      id: 5,
      img: "../../../public/ford-mustang.jpg",
      name: "Ford Mustang",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      id: 6,
      img: "../../../public/ford-suv.jpg",
      name: "Ford SUV",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
  ];

  const [veturat, setVeturat] = useState(veturatNeShitje);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (vetura) => {
    setFavorites([...favorites, vetura]);
    setVeturat(veturat.filter((v) => v.id !== vetura.id));
  };

  const removeFromFavorites = (vetura) => {
    setVeturat([...veturat, vetura]);
    setFavorites(favorites.filter((v) => v.id !== vetura.id));
  };

  return (
    <>
      <div className="container text-center">
        <h1>Veturat ne Shitje</h1>
        <div className="row">
          {veturat.map((vetura) => (
            <div className="col-md-4" key={vetura.id}>
              <div className="card">
                <div className="card-header">
                  <h2>{vetura.name}</h2>
                </div>
                <div className="card-body">
                  <img
                    src={vetura.img}
                    alt={vetura.name}
                    className="img-fluid"
                  />
                  <p>{vetura.desc}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToFavorites(vetura)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center">
        <h1>Veturat ne Favorites</h1>
        <div className="row">
          {favorites.map((vetura) => (
            <div className="col-md-4" key={vetura.id}>
              <div className="card">
                <div className="card-header">
                  <h2>{vetura.name}</h2>
                </div>
                <div className="card-body">
                  <img
                    src={vetura.img}
                    alt={vetura.name}
                    className="img-fluid"
                  />
                  <p>{vetura.desc}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavorites(vetura)}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeWork1;
