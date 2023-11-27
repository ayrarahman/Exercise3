

$("#happy").on("click", function () {
    event.stopPropagation();
    $("#kitty").attr("src", "imgs/happycat.png")
})
$("#sad").on("click", function () {
    event.stopPropagation();
    $("#kitty").attr("src", "imgs/sadcat.png")
})
$("#angry").on("click", function () {
    event.stopPropagation();
    $("#kitty").attr("src", "imgs/angrycat.png")
})
$("#surprised").on("click", function () {
    event.stopPropagation();
    $("#kitty").attr("src", "imgs/surprisedcat.png")
})
$("#confused").on("click", function () {
    event.stopPropagation();
    $("#kitty").attr("src", "imgs/confusedcat.png")
})

$(".box").on("click", function (event) {
    event.stopPropagation();
});

$(document).on("click", function () {
    $("#kitty").attr("src", "imgs/catoriginal.png");
});