import emojipedia from "./emojipedia"
function show(){
const ans = emojipedia.map(function(x){
    return x.meaning.substring(0,100)
})
console.log(ans);

}

export default show
