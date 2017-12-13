if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
} else {
    //						alert("您的浏览器不支持DeviceOrientation");
}

var _userLogoDom = document.querySelector('.userLogoContainer');


function DeviceOrientationHandler(event) {
    var alpha = event.alpha,
        /*指南针方向*/
        beta = event.beta,
        /*上下角度*/
        gamma = event.gamma;

        // alpha的取值范围是0-360，一般来说，设备指向正北方向时为0。
        // beta值为设备绕x轴旋转的角度，取值范围为-180-180。
        // gamma取值范围-90-90.
        $(".alpha").text(alpha.toFixed(2));
        $(".beta").text(beta.toFixed(2));
        $(".gamma").text(gamma.toFixed(2));
        // console.log(event);
        _userLogoDom.style.transform=""

}
console.dir(getComputedStyle(_userLogoDom,null).transform)
