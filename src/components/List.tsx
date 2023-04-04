import { ReactNode } from 'react';
import ListItem from './ListItem';

interface ListProps {
    items: string[],
}

// 
const List=<T,>({items}: ListProps) => {
    return(
        <ul>
            {items.map((item, i) => 
                (<ListItem i={i} text={item}/>)
            )}
        </ul>
    )
}

export default List;