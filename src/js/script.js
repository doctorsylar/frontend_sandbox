console.log(123);
$(function () {
    for (let i = 0; i < 10; i++) {
        init();
    }
});
function init() {
    $('#test_btn').click(function () {
        console.log('test');
    })
}