import { ReactNode, useState } from "react";

interface AddListItemProps {
    addToList: (item: any) => void,
}

const AddListItem = ({addToList}: AddListItemProps) => {

    const[title, setTitle] = useState('');
    
    const handleTextChange = (e: any) => {
        console.log('inside handleTextChange')
        const newItem = e.target.value;
        setTitle(newItem);
    };

    const handleSubmit = () => {
        console.log(`inside submit: ${title}`);
        addToList?.(title);
        setTitle('');
    }

    return(
        <div className="addContainer">
            <input type="text" onChange={handleTextChange} value={title}/> 
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default AddListItem;