import { useSelector } from 'react-redux';

export const Home = () => {

  const reduxStore = useSelector(state=>state.todos)
  console.log('reduxStore', reduxStore);

  return (
    <h1 className='my-5 text-center'>Home</h1>
  )
}

