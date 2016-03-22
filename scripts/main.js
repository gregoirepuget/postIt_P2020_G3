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
   
    afficherPostIt(listPostIt.length-1);
    
  });
  
  function afficherPostIt(postIt_ID)
  {
    var content='<div class="postick" data-key="'+postIt_ID+'" style="left:'+listPostIt[postIt_ID].posX+'px; top:'+listPostIt[postIt_ID].posY+'px; background:'+listPostIt[postIt_ID].couleur+';">';
    content += '  <div class="toolbar"><span class="delete">x</span></div>';
    content += '  <div contenteditable="true" class="editable">'+listPostIt[postIt_ID].content+'</div>';
    content += '</div>';
    
    
    $("body").append(content);
  
  }
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
  
  
});



















