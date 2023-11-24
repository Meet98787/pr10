const initial ={
    details:[
        {name:"meet",email:"meet@gmail.com" },
        {name:"monil",email:"monil@gmail.com" },
        {name:"kevin",email:"kevin@gmail.com" }
    ]
}
const Reducer = (state=initial ,action)=>{
    if(action.type == "deleteData"){
        return{
            ...state,details:state.details.filter((item,index)=>{
                if(index != action.playlord){
                    return item
                }
            })
        }
    }
    return state
}
export default Reducer