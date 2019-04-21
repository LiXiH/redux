import { INPUT_CHANGE,SUBMIT_ITEM,DEL_ITEM } from './actionType';
export const getinputChangeAction = (value) => (
    {
        type: INPUT_CHANGE,
        value
    }
)
export const getsubmitItemAction = () => (
    {
        type: SUBMIT_ITEM
    }
)
export const getdelItemAction = (index) => ({
    type: DEL_ITEM,
    index
})