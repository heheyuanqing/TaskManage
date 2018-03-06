//获取搜索结果
export default (state={search:[]},action)=>{
    if(action.type==='showResult'){
        const result = action.result;
        return Object.assign([],state.search,result);
    }
    return state;
}