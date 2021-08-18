import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsPro } from '../actions/proActions';
import DatePick from '../components/DatePick';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import data from '../data';

export default function ProScreen(props) {
  
  const dispatch = useDispatch();
  const proId = props.match.params.id;
  const proDetails = useSelector((state) => state.proDetails);
  const { loading, error, pro } = proDetails;

  useEffect(() => {
    dispatch(detailsPro(proId));
  }, [dispatch, proId]);

  return (
    <div>
    {loading ? (
        <LoadingBox/>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={pro.image} alt={pro.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{pro.name}</h1>
            </li>
            <li>
              <Rating
                rating={pro.rating}
                numReviews={pro.numReviews}
              ></Rating>
            </li>
            <li>Pirce : {pro.price} Dt</li>
            <li>
              Description:
              <p>{pro.description}</p>
            </li>
            <li>
              ABOUT:
              <p>{pro.about}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{pro.price} dt</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    { ((new Date().toDateString().slice(0,3) == pro.availdaybegin) || (new Date().getDay() == pro.availdayend) || (new Date().getHours() < pro.starthours) || (new Date().getHours() > pro.endhours))
                    ? (
                      <span className="danger">Unavailable only available from <span style={{ textTransform:"uppercase"}}>{pro.availdaybegin}.</span> to <span style={{ textTransform:"uppercase"}}>{pro.availdayend}.</span> from {pro.starthours}:00 to {pro.endhours}:00 </span>
                  ) : (
                    <span className="success">Available from <span style={{ textTransform:"uppercase"}}>{pro.availdaybegin}.</span> to <span style={{ textTransform:"uppercase"}}>{pro.availdayend}.</span> from {pro.starthours}:00 to {pro.endhours}:00 </span>
                    
                    )}
                  
                  </div>

                </div>
              </li>
              { !((new Date().toDateString().slice(0,3) == pro.availdaybegin) || (new Date().getDay() == pro.availdayend) || (new Date().getHours() < pro.starthours) || (new Date().getHours() > pro.endhours)) && (
                    <>
            
                    <li>
                        <button className="primary block">Choose a Time </button>
                    </li>
                    <li>
                      <DatePick/>
                      </li>

                      
                    </>
              )}
            
            </ul>
          </div>
        </div>
      </div>
      <Link to="/" style={{ marginTop:"350px"}}>Back to result</Link>
    </div>
                  )}
    </div>

    
  );
}