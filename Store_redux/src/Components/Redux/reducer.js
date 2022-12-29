const initdata="dummy data"
function reducer(state=initdata,action)
{
   if(action.type==="inputdata")
   {
    state=action.username;
   }
   return state;

}
export default reducer