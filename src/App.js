import { act } from 'react-dom/test-utils';
import { useSelector, useDispatch } from 'react-redux';
import './counter.css'
import {actions} from './store/index' //import redux toolkit setting

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incre = () => {
    dispatch (actions.incre()); ////Using redux toolkit -- fisrt line
    // dispatch({ type: 'INC' }); not using toolkit
  }

  const decre = () => {
    dispatch ( actions.decre());
    // dispatch({ type: 'DEC' });
  }

  const addBy = () => {
    dispatch (actions.addBy(20))
    // dispatch({ type: 'ADD', payload: 10 })
  }
  const tenTimes = () => {
    dispatch (actions.tenTImes(10))
    // dispatch({ type: 'TENTIMES', payload:10 })
  }
  const RESET = () => {
    dispatch (actions.RESET(0))
  //   // dispatch ({type:'RESTNUM'})
  }
  return (
    <div className='styling'>
      <h3>Counter App</h3>
      <h2>{counter}</h2>
      <button onClick={incre}>+1</button>
      <button onClick={decre}>-1</button>
      <button onClick={addBy}>+20</button>
      <button onClick={tenTimes}>X10 </button>
      <button onClick={RESET}>RESET</button>
    </div>
  );
}
export default App;