import ClickCounter from './components/RenderProps/ClickCounter';
import HoverCounter from './components/RenderProps/HoverCounter';
import Counter from './components/RenderProps/Counter';

function App() {
  return (
    <div>

         <Counter render={(counter,incrementCount)=>(
              <ClickCounter count={counter} incrementCount={incrementCount}/>
         )}/>

         <Counter render={(counter,incrementCount)=>(
              <HoverCounter count={counter} incrementCount={incrementCount}/>
         )}/> 
    </div>
  );
}

export default App;
