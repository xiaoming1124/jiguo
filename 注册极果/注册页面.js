let phone_ = document.getElementById('phone');
let imgCode_ = document.getElementById('imgCode');
let numCode_ = document.getElementById('numCode');
let getNumCode_ = document.getElementById('getNumCode');
let userName_ = document.getElementById('userName');
let psw1 = document.getElementById('psw1');
let psw2 = document.getElementById('psw2');
let promptlyRegister_ = document.getElementById('promptlyRegister');

let return1 = 0;
let return2 = 0;
let return3 = 0;
let return4 = 0;
let return5 = 0;
let return6 = 0;

phone_.onfocus = function () {
    phone_.value = '';
}
phone_.onblur = function () {
    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(phone_.value)) {
        phone_.value = '请输入正确的手机号码！';
    } else {
        return1 = 1;
    }
}

imgCode_.onfocus = function () {
    imgCode_.value = '';
}
imgCode_.onblur = function () {
    let text = 'r2B7';
    if ((imgCode_.value) != text) {
        imgCode_.value = '请输入正确的校验码！';
    } else {
        return2 = 1;
    }
}

let num = 60;
let timer = null;
getNumCode_.onclick = function () {
    timer = setInterval(function () {
        getNumCode_.innerText = num + '秒';
        num--;
        if (num == 30) {
            alert('验证码为：1640');
        } else if (num == -2) {
            clearInterval(timer);
            getNumCode_.innerText = '再次获取';
        }
    }, 1000);
    numCode_.onblur = function () {
        let text = '1640';
        if ((numCode_.value) != text) {
            numCode_.value = '请输入正确的验证码！';
        } else {
            return3 = 1;
        }
    }
    numCode_.onfocus = function () {
        numCode_.value = '';
    }
}

userName_.onfocus = function () {
    userName_.value = '';
}
userName_.onblur = function () {
    reg = /^[\w\u4e00-\u9fa5]{1,12}$/;
    if (userName_.value.length == 0) {
        userName_.value = '用户名不能为空';
    } else if (!reg.test(userName_.value)) {
        userName_.value = '用户名被占用';
    } else {
        return4 = 1;
    }
}

psw1.onfocus = function () {
    psw1.value = '';
}
psw1.onblur = function () {
    reg = /^\w{6,12}$/;
    reg1 = /[^0-9]/;
    reg2 = /[^a-zA-Z]/;
    if (!reg.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else if (!reg1.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else if (!reg2.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else {
        return5 = 1;
    }
}

psw2.onfocus = function () {
    psw2.value = '';
}
psw2.onblur = function () {
    if (psw1.value != psw2.value) {
        psw2.value = '两次密码输入不一致';
    } else {
        return6 = 1;
    }
}

promptlyRegister_.onclick = function () {
    if (return1 == 1 && return2 == 1 && return3 == 1 && return4 == 1 && return5 == 1 && return6 == 1) {
        alert('注册成功！');
    } else {
        alert('信息填写不完整，并未注册成功！');
    }
}