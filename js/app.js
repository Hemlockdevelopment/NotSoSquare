
var overlay = false;
var clickable = true;
var activeLink;
var clickedLink;
var activeElement;
var newElement;
var primary_color = "rgb(236, 28, 58)";

// TODO: Uitzetten van Click on page.
$('#container').on("click",function() {
    if(overlay){
        aboutContact(clickedLink);
    }
});  

$('#headerMenu').click(function(e){
    e.stopPropagation();
});

$('#aboutContact').click(function(e){
    e.stopPropagation();
});


$("#headerMenu a").on('click', function(){
    var thisID = $(this).attr('id');
    clickedLink = this;
    
    if(clickable){
        clickable = false;
        if(thisID == 'linkContact') {
            newElement = "#infoContact";
        }
        if(thisID == 'linkAbout') {
            newElement = "#infoAbout";
        }
        
        // check for switching content or collapse/expand.
        if(activeElement == null || activeElement == newElement){
            if(activeElement == null){
                $(newElement).show();
            }
            aboutContact(clickedLink);
        }else{
            $(activeLink).css("color","");
            $(clickedLink).css("color",primary_color);
            $(activeElement).animate({opacity: 'hide', height: 'hide'}, 'slow',function(){
                $(activeElement).hide();
            });
            $(newElement).animate({opacity: 'show', height: 'show'}, 'slow', function(){
                activeElement = newElement;
                clickable = true;
            });
        }

    }
    activeLink = clickedLink; // set the clicked link to active link before the next click is registered.
    
});

function aboutContact(c){
    if(!overlay){
        $(c).css("color",primary_color);
        overlay = true;
        $("#content").addClass("greyscale");
        $("#aboutContact").animate({opacity: 'show', height: 'show'}, 'slow', function(){
            clickable = true;
            activeElement = newElement;
            newElement = null;
        });
    }else{
        overlay = false;
        $(c).css("color","");
        $("#content").removeClass("greyscale");
        $("#aboutContact").animate({opacity: 'hide', height: 'hide'}, 'slow', function(){
            $(activeElement).hide();
            clickable = true;
            activeElement = null;
            newElement = null;
            
        });
    } 
}


