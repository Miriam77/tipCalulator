
$(function () {


    $(function () {
        $("button#calculate").click(function (ev) {
            var amount = $("#amount").val();
            var percent = $("#service").val();
            var people = $("#people").val();

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
            <span class='st_sharethis_large' displayText='ShareThis'></span>
                <span class='st_facebook_large' displayText='Facebook'></span>
                <span class='st__large' displayText=''></span>







            // $(document).ready(function () {
            //     //called when key is pressed in textbox
            //     $(".onlynum").keypress(function (e) {
            //         //if the letter is not digit then display error and don't type anything
            //         if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //             //display error message
            //             $("#errmsg").html("Digits Only").show().fadeOut("slow");
            //             return false;

        });
    });
});



