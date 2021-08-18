import React, { useEffect, useState } from 'react';
import Pro from '../components/Pro';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPros } from '../actions/proActions';

export default function HomeScreen() {

  const dispatch = useDispatch();
  const proList = useSelector((state) => state.proList);
  const { loading, error, pros } = proList;
  useEffect(() => {
    dispatch(listPros());
  }, [dispatch])
  return (
    <div>
    {loading ? (
        <LoadingBox/>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {pros.map((pro) => (
            <Pro key={pro._id} pro={pro}/>
          ))}
        </div>
                  )}
    </div>
  );
}