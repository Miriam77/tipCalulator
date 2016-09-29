$(function () {


    $(function () {
        $("button#calculate").click(function (ev) {
            var amount = $("#amount").val();
            var percent = $("#service").val();
            var people = $("#people").val();

            if (amount.toString().length > 6) {
                alert("invalid amount");
                return;
            }
            if (amount === "") {
                alert("Please enter amount");
                return;
            }
            // sets people value to 1, if nothing entered
            if (people === "" || people <= 1) {
                people = 1;
            }
            var tip = amount * percent / people;
            tip = Math.round(tip * 100) / 100;
            tip = tip.toFixed(2);

            console.log("amount" + amount);
            console.log("percent" + percent);
            console.log(tip);

            $("#tip").append(tip);

            $("#clear").click(function () {
                location.reload();

            });
        });
    });
});

