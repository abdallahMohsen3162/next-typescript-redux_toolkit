"use client"; 
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { add , remove} from "../../store/slice";

import swal from "sweetalert";
export default function Home() {

  const count = useSelector((state: any) => state.personsArray.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(count);

  }, [count])
  return (
    <main>
      <Link href={"/page1"}>
        ddd
      </Link>
     <div>
      <button onClick={() => dispatch(add({name:"test", value:10}))}>Increment</button>
      <button onClick={() => dispatch(remove({name:"1213a", value:10}))}>Increment</button>
    </div>
    </main>
  );
}
