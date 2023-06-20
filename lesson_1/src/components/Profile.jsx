import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { exampleAction } from '../store/actions'


export default function Profile () {
    const { showName, name}  = useSelector( (state) => state);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {dispatch(exampleAction);
    }, [dispatch]);
    
    return(
    <>
        <h1>Profile</h1>
        <input type="checkbox"
        checked = {showName}
        value={showName}
        onChange={setShowName} />
        {showName && <div>{name}</div>}

    </>
        
    )  
};