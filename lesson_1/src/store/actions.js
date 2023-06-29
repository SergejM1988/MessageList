export const TOGGLE_SHOWNAME = "TOGGLE_SHOWNAME";
export const CHANGE_NAME = "CHANGE_NAME";
export const toggleShowName = {
type: TOGGLE_SHOWNAME
}
export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
    });
