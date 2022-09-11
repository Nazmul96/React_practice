import Text from './components/composition/Text';
import Emoji from './components/composition/Emoji';
import Bracket from './components/composition/Bracket';

function App() {
  return (
    <div>
         <Emoji>
              {({addEmoji})=>(
                 <Bracket>
                      {({addBracket})=><Text addEmoji={addEmoji} addBracket={addBracket}/>}
                 </Bracket> 
              )}
          </Emoji>
    </div>
  );
}

export default App;
