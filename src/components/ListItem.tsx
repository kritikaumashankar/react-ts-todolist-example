import { useCallback, useState } from "react";

type ListItemProps = {
       text: string,
       i: number
          };

 const ListItem = ({text, i}: ListItemProps) => {
   const [checked, setChecked] = useState(false);

   const handleClick = (e: any) => {
         setChecked(!checked);
   };

   return(
      <li className="li" key={i}>
         {checked? <s><span>{text}</span></s> : <span>{text}</span>}
         <input type="checkbox" onClick={handleClick}/>
      </li>
    )

   }

    
 

 export default ListItem;
