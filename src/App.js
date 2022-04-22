import { useSelector, useDispatch } from 'react-redux';
import './counter.css'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incre = () => {
    dispatch({ type: 'INC' });
  }

  const decre = () => {
    dispatch({ type: 'DEC' });
  }

  const addBy = () => {
    dispatch({ type: 'ADD', payload: 10 })
  }
  const tenTimes = () => {
    dispatch({ type: 'TENTIMES', payload:10 })
  }
  const RESET = () => {
    dispatch ({type:'RESTNUM'})
  }
  return (
    <div className='styling'>
      <h3>Counter App</h3>
      <h2>{counter}</h2>
      <button onClick={incre}>+1</button>
      <button onClick={decre}>-1</button>
      <button onClick={addBy}>+10</button>
      <button onClick={tenTimes}>X10 </button>
      <button onClick={RESET}>RESET</button>
    </div>
  );
}
export default App;