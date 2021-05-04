import { useState } from 'react';

function DemoFunck() {
  // const [state, setState] = useState({
  //   num: 10,
  //   step: 1
  // });

  const [count,setCount] = useState(7);
  const [step, setStape] = useState(1);

  function onCounterClickButtonHandler(e) {
    // setState((oldSate) => ({...oldSate, num: oldSate.num + 1}));
    setCount((oldState) =>  oldState + step);
  }

  function onStepSelectChangeHandler(e){
    const numValue = Number(e.target.value)
    // setState((oldState) => ({...oldState, step: numValue}));
    //тук не  ни интересува стария стейт
    setStape(numValue);
  }



  return (
    <div className="containerDemo">
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={onCounterClickButtonHandler}>Increment</button>
      <label htmlFor="step">Step</label>
      <select name="step" id="step" onChange={onStepSelectChangeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>
      <p>{step}</p>
    </div>
  );

}

export default DemoFunck;