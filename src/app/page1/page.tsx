"use client";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
  const count = useSelector((state: any) => state.personsArray.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(count);
    
  })
  return (
    <div>
      rettt
    </div>
  )
}
