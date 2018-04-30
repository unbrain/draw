let speed = 30
function writeCode(precode, code, callback) {
    let pcode = precode || ''
    let Domcode = document.querySelector('.code > pre')
    let n = 0
    setTimeout(function fn(){
        Domcode.innerHTML = Prism.highlight(pcode + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = result = pcode + code.substring(0, n)
        Domcode.scrollTop = Domcode.scrollHeight
        n++
        if (n > code.length) {
            callback && callback.call()
        }else{
            setTimeout(fn,speed)
        }
        
    }, speed)
}

var css = `
/* 今天我们来画《千与千寻》
 * 里的无脸男
 * 我们先来画他的头
 * 点击左下角的按钮有动画效果┗|｀O′|┛ 嗷~~
 * 旁边的是控制速度的( ⊙ o ⊙ )啊！
 */

.nhead {
    position: absolute;
    display: flex;
    position: fixed;
    border: 1px solid white;
    align-items: center;
    justify-content: center;
    height: 130px;
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15%;
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
    width: 25px;
    height: 10px;
    background: #231f20;
    border-radius: 150% 100% / 100% 100% 200% 200%;
    box-shadow: 0px 10px 0px -3px #beb6b8;
}
/* 眼睛
 */

.eye {
    position: absolute;
    width: 20px;
    height: 10px;
    left: 7px;
    margin-top: -10px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 9px 0px -4px #a69b9e;
    background: #231f20;
    border-radius: 100% 150% / 200% 200% 100% 100%;
}
/* 另一个眼睛
 */

.eye:nth-of-type(2) {
    left: auto;
    right: 7px;
    transform: translateY(-50%) scaleX(-1);
}
/* 眼睛上的条纹
 */

.eye::after {
    content: '';
    position: absolute;
    height: 15px;
    width: 9px;
    background: #c5a9cf;
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(5deg);
    border-radius: 200% 100% 200% 100% / 200% 200% 10% 10%;
}
/* 眼睛下的条纹
 */

.eye::before {
    content: '';
    position: absolute;
    bottom: -41px;
    transform: translateX(87%) rotate(-5deg);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 4px 0 4px;
    border-color: #c5a9cf transparent transparent transparent;
}
/* O(∩_∩)O哈哈~，谢谢观看
 */
`

function getSpeed() {
    let vspeed = document.querySelector('.speed')
    vspeed.ontouchmove = () => {
        speed = 100 - (vspeed.value + 0) * 100
        console.log(speed)
    }
    
}
getSpeed()

function smileactive(){
    let sactive = document.querySelector('.ssmile')
    let mouthactive = document.querySelector('.mouth')
    let eyeactive = document.querySelectorAll('.eye')
    
    let i = 1
    sactive.ontouchstart = () => {
        if (i) {
            sactive.classList.add('active')
            mouthactive.classList.add('active')
            eyeactive.forEach(e => {
                e.classList.add('active')
            });
            
            i = 0
        } else {
            i = 1
            sactive.classList.remove('active')
            mouthactive.classList.remove('active')
            eyeactive.forEach(e => {
                e.classList.remove('active')
            });
        }
    }
}
smileactive()
writeCode('', css, () => { console.log(1) })