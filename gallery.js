jQuery(function($){

  var settings = {
    thumbListId: "thumbs",
    imgViewerId: "viewer"
  };

var thumbLinks = $("#"+settings.thumbListId).find("a"),
  firstThumbLink = thumbLinks.eq(0);

$("#"+settings.thumbListId).after(
  $(document.createElement("p"))
    .attr("id",settings.imgViewerId)
    .append(
      $(document.createElement("img")). attr ({
        alt:"",
        src: firstThumbLink.attr("imagesprojets/nuit1.jpg")
      })
    )
);

var imgViewer = $("#"+settings.imgViewerId),
  bigPic = imgViewer.children("imagesprojets/nuit1.jpg");

  thumbLinks
    .click(function(e){
      e.preventDefault ();
        var $this = $(this),
          target = $this.attr("imagesprojets/nuit1.jpg");
      if (bigPic.attr("imagesprojets/nuit1.jpg") == target) return;
      bigPic
        .attr("imagesprojets/nuit1.jpg", target);

    });


});
