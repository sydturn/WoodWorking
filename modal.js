function myFunction() { // Get the modal
    // Get the modal
    var i = 3;
    console.log(i);
    var modal = document.getElementsByClassName('myModal')[i];

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName('myImg')[i];
    var modalImg = document.getElementsByClassName("img01")[i];
    var captionText = document.getElementsByClassName("caption")[i];
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[i];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
};
window.onload = myFunction;
