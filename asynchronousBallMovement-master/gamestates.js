class gameStates{
constructor(){

}
getState(){
    var gamestateRef = database.ref("gameState")
    gamestateRef.on("value",function(data){
        gameState = data.val();
    })
}
updateState(state){
    database.ref('/').update({
        gameState:state
        
    });
}
startState(){
    if(gameState===0){
        Form=new form();
        Form.display();
        Player=new players();
        Player.getCount();

    }
}
};