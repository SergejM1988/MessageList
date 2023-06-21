import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleShowName } from '../store/actions'


export default function Profile () {
    const { showName, name}  = useSelector( (state) => state);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {dispatch(toggleShowName);
    }, [dispatch]);
    
    return(
    <>
        <h1>Profile</h1>
        <input type="checkbox"
        checked = {showName}
        value={showName}
        onChange={setShowName} />
        <span>Show Name</span>
        {showName && <div>{name}</div>}

    </>
        
    )  
};