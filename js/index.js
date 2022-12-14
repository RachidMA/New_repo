var $button = $('a button');
$button.mouseover(function(){
    $button.css("background-color", "blue");
  });

$button.mouseout(function(){
    $button.css("background-color", "black");
});
