$(function(){
    //#add 버튼을 클릭했을떄 
    // #boxArea.append("<div class='box> 박스 </box>")
    $("#add").click(()=>{
        $("#boxArea").append("<div class='box'> 박스 </box>")
        console.log(boxArea);
    //#del 버튼을 클릭했을때 
    //$(".box : last").remove
});
 $("#del").click(()=>{
    $(".box : last").remove();
});
});