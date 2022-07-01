const CounterActions = ({ increment, decrement }) => {
  return (
    <>
      <div className="btn-wrapper w-100">
        <button className="btn btn-outline-dark" onClick={increment}>
          Increment +
        </button>
        <button className="btn btn-light" onClick={decrement}>
          decrement -
        </button>
      </div>
    </>
  );
};

export default CounterActions;
