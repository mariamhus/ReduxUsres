const ay7aga = (state=[], action)=>{
//action ==>{type"esm el event" ,payload "data gaya mn bra" }
    switch (action.type) {
        case "ADDUSERS":
            return action.payload;
        case "DELETEUSER":
            //{type:"DELETEUSER",payload:id}
            console.log(action.payload);
            // state.splice(action.payload-1,1);
            return state.filter((user)=>+user.id!==+action.payload);
            // break;
            case "UPDATEUSERNAME":
                //{type:"UPDATEUSERNAME".payload:{id,data}}
                // console.log(action.payload);
                return state.map((user)=>+user.id==+action.payload.id?{...user,name:action.payload.userr}:user)
        default:
            return state;
    }
}

export default ay7aga;