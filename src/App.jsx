import { useEffect, useContext } from 'react';
import DummyContext from './DummyContext';

function App() {
  const { fetchData } = useContext(DummyContext);
  // BUTTON CLICKED
  const buttonClicked = () => {
    // console.log('Button clicked');
    fetchData();
  }

  return (
    <>
      <button onClick={buttonClicked}>Click me</button>
    </>
  );
}

export default App;
