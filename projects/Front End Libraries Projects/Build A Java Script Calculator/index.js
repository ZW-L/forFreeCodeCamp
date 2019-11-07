$(document).ready(function() {
    var show_text = "";
    var result_flag = false;
    var ans_text = "";
    //add "0-9"
    $(".btn-num").on('click', function() {
        //以0开头的整数部分的处理
        if (show_text === "0") {
            $(this).attr('value') === "0" ? show_text : show_text = $(this).attr('value');
        } else {
            // show_text==="" && ans_text!=="" ? show_text="Ans"+$(this).attr('value') :
            result_flag ? show_text = $(this).attr('value') : show_text += $(this).attr('value');
        }
        $("#show").val(show_text);
        result_flag = false;
    });
    //add operator '+' '-' '*' '/' '.' '%'
    $(".btn-cal").on('click', function() {
        var add_cal = $(this).attr('value');
        if (show_text === "") {
            result_flag && add_cal !== "." ? show_text += "Ans" + add_cal : //按下'='后按运算符
                add_cal === "-" ? show_text += "-" : show_text; //只有'-'能添加在开头
        } else {
            /[-+*/%.]$/.test(show_text) ? show_text : show_text += add_cal; //不能有连续运算符
        }
        $("#show").val(show_text);
        result_flag = false;
    });
    //press "AC"
    $(".btn-ac").on('click', function() {
        $("#show").val("");
        show_text = "";
        ans_text = "";
        result_flag = false;
    });
    // press "DE"
    $(".btn-de").on('click', function() {
        show_text = show_text.slice(0, -1);
        $("#show").val(show_text);
        result_flag = false;
    });
    //press "Ans"
    $(".btn-ans").on('click', function() {
        if (result_flag) {
            $("#show").val("Ans");
        }
        // result_flag = false;
    });
    //press "="
    $(".btn-equ").on('click', function() {
        if (show_text !== "" && !/[-+*/%.]$/.test(show_text)) {
            show_text = show_text.replace("Ans", ans_text);
            ans_text = eval(show_text);
            $("#show").val(ans_text);
            show_text = "";
            result_flag = true;
        }
    });
});