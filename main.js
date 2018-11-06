!function(){

let css = `
/* 首先准备比卡丘的皮 */

.canvas{
    background: #fee433;
}

.pikachu{
    position: relative;
    width: 100%;
    height: 165px;
}

/* 然后画鼻子 */

.nose{
    width: 0px;
    height: 0px;
    border-width: 12px;
    border-style: solid;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}

/* 画眼睛 */

.eyes{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px black solid;
}

/* 画眼珠 */

.eyes::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 2px black solid;
    position: absolute;
    left: 3px;
}

.leftEye{
    right: 50%;
    margin-right: 90px;
}

.rightEye{
    left: 50%;
    margin-left: 90px;
}

/* 画脸颊 */

.cheeks{
    height: 68px;
    width: 68px;
    border: 2px black solid;
    background: #fd0d1c;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.leftCheek{
    right: 50%;
    margin-right: 116px;
}

.rightCheek{
    left: 50%;
    margin-left: 116px;
}

/* 画上唇 */

.lips{
    position: absolute;
    height: 20px;
    width: 64px;
    border-width: 2px;
    border-style: solid;
    top: 50px;
    background: #fee433;

}

.leftLip{
    right: 50%;
    transform: rotate(-20deg);
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
}

.rightLip{
    left: 50%;
    transform: rotate(20deg);
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
}

.mouthWrapper{
    bottom: -15px;
    position: absolute;
    left: 50%;
    /* margin-left: -150px; */
    transform: translateX(-50%);
    height: 122px;
    width: 300px;
    border: green;
    overflow: hidden;
}

/* 画嘴巴 */

.mouth{
    width: 139px;
    height: 1000px;
    background: #990513;
    border: 2px black solid;
    border-radius: 100px/500px;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    bottom: 0;
    overflow: hidden;
}

/* 画舌头 */

.mouth::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 90px;
    background: #fc4a62;
    right: 50%;
    transform: translateX(50%);
    border-radius: 50%;
}

/* 这就是我画的比卡丘，谢谢观看 */

`

let duration = 50;

$('.actions > button').on('click',function(e){
    let button = e.currentTarget;
    $(button).addClass('active').siblings('.active').removeClass('active');
    let speed = $(button).attr('data-speed')
    switch(speed){
        case 'slowSpeed':
        duration = 100;
        break;
        case 'mediumSpeed':
        duration = 50;
        break;
        case 'fastSpeed':
        duration = 20;
        break;
    }
})

function writeCSS(contents){
    let n = 0;
    let writing;
    hljs.initHighlighting();
    writing = setTimeout(function run(){
        n += 1;
        code.innerHTML = hljs.highlight('css', contents.slice(0,n), true).value;
        code.scrollTop = code.scrollHeight;
        style.innerHTML = contents.slice(0,n);
        if(n < contents.length){
            writing = setTimeout(run,duration)
        }
    },duration)
}

writeCSS(css);

}()
