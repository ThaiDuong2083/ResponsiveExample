import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Foods = () => {
    const data = [
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        },
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        },
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        },
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        },
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        },
        {
            title: "Pizza Hut Delicious Pizza",
            type: ["American", "Fast Food", "Burgers"],
            url: "src/assets/1.webp"
        }
    ]
    return (
        <div className="container mt-3 align-items-center d-flex flex-column">
            <h2>Available Restaurant Nearby Area</h2>
            <div className="d-flex">
                {data.map((food) => (
                    <div className="card" style={{width: '30%'}} >
                        <img src={food.url} className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <a className="card-title">{food.title}</a>
                            <a className="card-title">{food.type}</a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foods;