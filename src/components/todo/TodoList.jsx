
const TodoList = ({ todos,deleteTodo }) => {

  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className='d-flex align-items-center border my-3' key={i}>
      <h5 className="mx-5 text-muted">Todos List</h5>
          <ul >
            <li className="d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            </div>
            </li>
          </ul>
          <div className="btn-wrapper mx-5">
          <button className='btn btn-danger btn-sm' onClick={()=>deleteTodo(i)}>x</button>
          </div>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      {todosList}
    </div>
  );
};

export default TodoList;
