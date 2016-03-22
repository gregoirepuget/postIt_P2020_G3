$(document).ready(function(){
  
  //localStorage.removeItem('listPostItLocal');
  
  var listPostIt = localStorage.getItem('listPostItLocal');
  if(listPostIt != null)
  {
    listPostIt = JSON.parse(listPostIt);
    console.log(listPostIt);
    
    for(var i=0; i < listPostIt.length; i++)
    {
        afficherPostIt(i);
    }
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
    
    $(".postick").draggable({
      cancel: ".editable",
      stack: ".postick",
      zIndex: 1000,
      stop: function( event, ui ) {
        var postIt_ID= $(this).attr("data-key");
        var posX= $(this).position().left;
        var posY= $(this).position().top;
        
        listPostIt[postIt_ID].posX=posX;
        listPostIt[postIt_ID].posY=posY;
        localStorage.setItem("listPostItLocal", JSON.stringify(listPostIt));
      }
    });
    
    $(".editable").on('blur', function(){
      var postIt_ID=$(this).parent().attr('data-key');
      var content = $(this).html();
      listPostIt[postIt_ID].content=content;
      localStorage.setItem("listPostItLocal", JSON.stringify(listPostIt));
    
    });
    
    $(".delete").on('click', function(){
      var postIt_ID=$(this).parent().parent().attr("data-key");
      
      listPostIt.splice(postIt_ID, 1);
      localStorage.setItem("listPostItLocal", JSON.stringify(listPostIt));
    
    });
  
  }
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
  
  
});



















