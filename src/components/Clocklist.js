import Clock from './Clock';

export default function Clocklist({quantities=[]})
{
    return (
            <div>
                {quantities.map((key)=>
                   <Clock key={key}/> 
                )}
            </div>
    );
}
//Clocklist;