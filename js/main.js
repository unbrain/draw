var css = `
/* 今天我们来画《千与千寻》
 * 里的无脸男
 * 我们先来画他的头
 * 点击左下角隐藏代码┗|｀O′|┛ 嗷~~
 */

.nhead {
    position: absolute;
    border: 1px solid white;
    height: 260px;
    width: 160px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 130% 130% / 120% 120% 160% 160%;
    background: white;
}
/* 嘴巴
 */

.mouth {
    position: absolute;
    left: 50%;
    bottom: 15%;
    transform: translateX(-50%) translateY(-50%);
    width: 50px;
    height: 20px;
    background: #231f20;
    border-radius: 150% 100% / 100% 100% 200% 200%;
    box-shadow: 0px 20px 0px -6px #beb6b8;
}
/* 眼睛
 */

.eye {
    position: absolute;
    width: 40px;
    height: 20px;
    left: 14px;
    margin-top: -20px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 18px 0px -8px #a69b9e;
    background: #231f20;
    border-radius: 100% 150% / 200% 200% 100% 100%;
}
/* 另一个眼睛
 */

.eye:nth-of-type(2) {
    left: auto;
    right: 14px;
    transform: translateY(-50%) scaleX(-1);
}
/* 眼睛上的条纹
 */

.eye::after {
    content: '';
    position: absolute;
    height: 30px;
    width: 18px;
    background: #c5a9cf;
    top: -40px;
    left: 50%;
    transform: translateX(-50%) rotate(5deg);
    border-radius: 200% 100% 200% 100% / 200% 200% 10% 10%;
}
/* 眼睛下的条纹
 */

.eye::before {
    content: '';
    position: absolute;
    bottom: -82px;
    transform: translateX(87%) rotate(-5deg);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 60px 8px 0 8px;
    border-color: #c5a9cf transparent transparent transparent;
}
/* O(∩_∩)O哈哈~，谢谢观看
 */
`
let speed = 0

function writeCode(precode, code, callback) {
    let pcode = precode || ''
    let n = 0
    let Domcode = document.querySelector('.code > pre')
    setTimeout(function fn() {
        Domcode.innerHTML = Prism.highlight(pcode + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = result = pcode + code.substring(0, n)
        Domcode.scrollTop = Domcode.scrollHeight
        n++
        if (n > code.length) {
            callback && callback.call()

        } else {
            setTimeout(fn, speed)
        }
    }, speed)
}

function getSpeed() {
    let vspeed = document.querySelector('.speed')
    vspeed.ontouchmove = () => {
        speed = 100 - (vspeed.value + 0) * 100
        console.log(speed)
    }

}
getSpeed()

function smileactive() {
    let sactive = document.querySelector('.ssmile')
    let mouthactive = document.querySelector('.mouth')
    let eyeactive = document.querySelectorAll('.eye')

    sactive.classList.add('active')
    mouthactive.classList.add('active')
    eyeactive.forEach(e => {
        e.classList.add('active')
    });
}

let i = true
function codeActive() {
    let code = document.querySelector('.code>pre')
    let button = document.querySelector('.button')
    
    button.ontouchstart = () => {
        if (i) {
            code.classList.add('active')
            button.textContent = '显示代码'
            i = !i
        } else {
            code.classList.remove('active')
            button.textContent = '隐藏代码'
            i = !i
        }
    }
    return i
}
codeActive()
writeCode('', css, () => {
    let code = document.querySelector('.code>pre')
    let button = document.querySelector('.button')
    if (i){
        setTimeout(() => {
            code.classList.add('active')
            button.textContent = '显示代码'
            i=!i
        }, 1000);
        
    }
    smileactive()
})