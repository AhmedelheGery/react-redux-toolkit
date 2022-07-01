import { useState } from "react";
import Count from "../../components/counter/Count";
import CounterActions from "../../components/counter/CounterActions";
import './Counter.css'
const Counter = () => {

  const [count, setCount] = useState(0);

  const [isSubmit, setSubmit] = useState(false);
 
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <section className="counter">
      {
        isSubmit
        ?
        <h1>Thank you for your support!</h1>
        :
        <>
        <h2 className='mb-3'>Support Us!</h2>
        <Count count={count} />
        <CounterActions increment={increment} decrement={decrement} />
        <button 
        className='btn btn-dark mx-auto mt-5 btn-lg'
        onClick={()=> setSubmit(true)}
        >Submit</button>
        </>
      }
    </section>

  );
};

export default Counter;
