$(document).ready(function(){
  

  var listPostIt = localStorage.getItem('listPostItLocal');
  if(listPostIt != null)
  {
    listPostIt = JSON.parse(listPostIt);
    console.log(listPostIt);
  }
  else
  {
    listPostIt = new Array();
    console.log("Liste vide");
  }
  
  
  $(".addPostIt").on('click', function(e){
    e.preventDefault();
    
    var tableauCouleurs=["#1abc9c","#2ecc71","#3498db","#9b59b6","#f39c12","#e74c3c","#c0392b"];
        
    var infoPostIt={
      "posX" : 200,
      "posY" : 200,
      "content"  : "Nouveau PostIt",
      "couleur" : tableauCouleurs[getTirage(tableauCouleurs.length)]
    };
    
    listPostIt.push(infoPostIt);
    localStorage.setItem("listPostItLocal", JSON.stringify(listPostIt));
   
  });
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
  
  
});









