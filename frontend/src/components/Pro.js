import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Pro(props) {
  const { pro } = props;
  return (
    <div key={pro._id} className="card">
      <a href={`/pro/${pro._id}`}>
        <img className="medium" src={pro.image} alt={pro.name} />
      </a>
      <div className="card-body">
        <a href={`/pro/${pro._id}`}>
          <h2>{pro.category}</h2>
        </a>
        <h4>{pro.name}</h4>
        <p>{pro.description}</p>
        <Rating
          rating={pro.rating}
          numReviews={pro.numReviews}
        />
        <p> <b>{pro.price}Dt</b> estimated average price</p>
        <h6> {pro.experience}  years of experience</h6>
        <p>{pro.nbOfJobs} jobs won with us </p>
          <p>{pro.location} </p>
          <h6>About</h6>
          <p>{pro.about}</p>
        <div className="row">
          
{/*           <div>
            <Link to={`/worker/${pro.worker._id}`}>
              {pro.worker.worker.name}
            </Link>
             </div> */}
        </div>

      </div>
    </div>
  );
}
