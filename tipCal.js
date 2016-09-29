$(function () {


    function getTip() {
        var amount = $("#amount").val();
        var percent = $("#service").val();
        var tip = amount * percent;


        var total = tip;
        console.log("amount" + amount);
        console.log("percent" + percent);
        console.log(tip);

        $("#tip").val(tip.toFixed(2));
        $("#total").val(total.toFixed(2));
    }

    $("#calculate").click(getTip);
    $("#tip").append(tip);

    console.log("dumbass")

});



