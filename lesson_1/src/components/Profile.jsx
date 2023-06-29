import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { toggleShowName, changeName } from '../store/actions'


export default function Profile () {
    const { showName, name}  = useSelector( (state) => state.name);
    const { value, setValue } = useState('')
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {dispatch(toggleShowName);
    }, [dispatch]);
    const handleChange = useCallback( (e) => {setValue(e.target.value)}, [setValue]);
    const setName = useCallback(() => {
        dispatch(changeName(value))
        }, [dispatch, value]);
        
    return(
    <>
        <h1>Profile</h1>
        <input type="checkbox"
        checked = {showName}
        value={showName}
        onChange={setShowName} />
        <span>Show Name</span>
        {showName && <div>{name}</div>}
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={setName}>Change name</button>

    </>
        
    )  
};