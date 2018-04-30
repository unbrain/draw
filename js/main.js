function writeCode(precode, code, callback) {
    let pcode = precode || ''
    let Domcode = document.querySelector('.code > pre')
    let n = 0
    let timer = setInterval(() => {
        Domcode.innerHTML = Prism.highlight(pcode + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = result = pcode + code.substring(0, n)
        Domcode.scrollTop = Domcode.scrollHeight
        if (n === code.length) {
            window.clearInterval(timer)
            callback && callback.call()
        }
        n++
    }, 0)
}

var css = `
.wrapper {
    height: 50vh;
    position: relative;
    background: #231f20;
}

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
    bottom: 20%;
    border-radius: 130% 130% / 120% 120% 160% 160%;
    background: white;
}

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
    animation: smile 3s infinite ease-in-out;
}

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

.eye:nth-of-type(1) {
    animation: leyesmile 3s infinite ease-in-out;
}

.eye:nth-of-type(2) {
    left: auto;
    right: 7px;
    transform: translateY(-50%) scaleX(-1);
    animation: eyesmile 3s infinite ease-in-out;
}

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

@keyframes smile {
    0% {
        border-radius: 150% 100% / 100% 100% 200% 200%;
    }
    85% {
        border-radius: 150% 100% / 100% 100% 200% 200%;
        transform: translateX(-80%) translateY(-50%);
    }
    90% {
        border-radius: 250% 100% / 100% 100% 200% 200%;
        transform: translateX(-80%) translateY(-50%) scaleY(0.6) scaleX(1.2);
    }
    95% {
        border-radius: 250% 100% / 100% 100% 200% 200%;
        transform: translateX(-80%) translateY(-50%) scaleY(0.6) scaleX(1.2);
    }
    100% {
        border-radius: 150% 100% / 100% 100% 200% 200%;
        transform: translateX(-80%) translateY(-50%);
    }
}

@keyframes eyesmile {
    85% {
        transform: translateX(-50%) translateY(-50%) scaleX(-1);
    }
    90% {
        transform: translateX(-50%) translateY(-50%) scaleY(0.6) scaleX(-1.2);
    }
    95% {
        transform: translateX(-50%) translateY(-50%) scaleY(0.6) scaleX(-1.2);
    }
    100% {
        transform: translateX(-50%) translateY(-50%) scaleX(-1);
    }
}
@keyframes leyesmile {
    85% {
        transform: translateX(-50%) translateY(-50%);
    }
    90% {
        transform: translateX(-50%) translateY(-50%) scaleY(0.6) scaleX(1.2);
    }
    95% {
        transform: translateX(-50%) translateY(-50%) scaleY(0.6) scaleX(1.2);
    }
    100% {
        transform: translateX(-50%) translateY(-50%);
    }
}`

writeCode('', css, () => {console.log(1)})