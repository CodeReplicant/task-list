import {Task} from './Task';


 export const List = ({List, handleToggle}) => {


   return (
       <div>
           {List.map(todo => {
               return (
                   <Task taskind={todo} key={todo.id} handleToggle={handleToggle} />
               )
           })}
       </div>
   );
};
 