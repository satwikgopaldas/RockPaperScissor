let Paper = document.getElementById('Paper')
let Rock = document.getElementById('Rock')
let Scissor = document.getElementById('Scissor')
let uo = document.getElementsByClassName('UserOption')
let po = document.getElementsByClassName('PcOption')
let LowerContainer = document.getElementsByClassName('LowerContainer')
let ResultView = document.getElementsByClassName('ResultView')
let CompScore = 0
let UserScore = 0
arr = ['Paper','Rock','Scissor']
NxtFunc = () => {
    document.getElementsByClassName('root')[0].style.display = 'none'
    WonImg = document.createElement('img')
    document.getElementById('rules').style.right = '25px'
    document.getElementById('Hurray').style.display = 'block'

}
Win = (pc,us) => {
    UserScore = UserScore+1
    LowerContainer[0].style.display = 'none';
    ResultView[0].style.display = 'flex';
    document.getElementById('UserScore').style.fontSize= '40px'
    document.getElementById('UserScore').innerText = UserScore
    document.getElementById('rules').style.right = '175px'
    NxtBtn= document.getElementById('NxtBtn')
    NxtBtn.style.display = 'block'

    
    if(us == 'Rock'){
        console.log(po[0])
        document.getElementById('PcOption').src = "./Scissor.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./rock.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementsByClassName('UserOption')[0].style.dropShadow = '0px 1px 62px 0px #00000021;'
    }
    if (us == 'Paper'){
        document.getElementById('PcOption').src = "./rock.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./paper.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementsByClassName('UserOption')[0].style.dropShadow = '0px 1px 62px 0px #00000021;'
    }
    if(us == 'Scissor'){
        document.getElementById('PcOption').src = "./paper.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./Scissor.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementsByClassName('UserOption')[0].style.dropShadow = '0px 1px 62px 0px #00000021;'
    }
}
Lose = (pc,us) => {
    CompScore = CompScore+1
    LowerContainer[0].style.display = 'none';
    ResultView[0].style.display = 'flex';
    document.getElementById('CompScore').style.fontSize= '40px'
    document.getElementById('CompScore').innerText = CompScore
    if(us == 'Scissor'){
        console.log(po[0])
        document.getElementById('UserOption').src = "./Scissor.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementById('PcOption').src = "./rock.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
    }
    if (us == 'Rock'){
        document.getElementById('UserOption').src = "./rock.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementById('PcOption').src = "./paper.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
    }
    if(us == 'Paper'){
        document.getElementById('UserOption').src = "./paper.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
        document.getElementById('PcOption').src = "./Scissor.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
    }
}
Tie = (e) => {
    LowerContainer[0].style.display = 'none';
    ResultView[0].style.display = 'flex';
    if(e == 'Rock'){
        document.getElementById('PcOption').src = "./rock.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./rock.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #0074B6'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
    }
    if(e == 'Paper'){
        document.getElementById('PcOption').src = "./paper.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./paper.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #FFA943'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
    }
    if(e == 'Scissor'){
        document.getElementById('PcOption').src = "./Scissor.png"
        document.getElementsByClassName('PcOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('PcOption')[0].style.borderRadius = '50%'
        document.getElementById('UserOption').src = "./Scissor.png"
        document.getElementsByClassName('UserOption')[0].style.border = '16px solid #BD00FF'
        document.getElementsByClassName('UserOption')[0].style.borderRadius = '50%'
    }
}
function myFunction() {
    var x = document.getElementsByClassName("RulesMenu");
    if (x[0].style.display === "none") {
      x[0].style.display = "block";
    } else {
      x[0].style.display = "none";
    }
}
PlayAgain = () => {
    LowerContainer[0].style.display = 'block';
    document.getElementsByClassName('root')[0].style.display = 'block'
    document.getElementById('Hurray').style.display = 'none';
    ResultView[0].style.display = 'none';
    document.getElementById('rules').style.right = '25px'
    NxtBtn.style.display = 'none'
}
Winner = (pc,us) => {
    if(us == 'Rock'){
        if(pc == 'Rock'){
            res = '<h1>TIE UP</h1><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">REPLAY</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Tie(pc)
        }
        if(pc == 'Scissor'){
            res = '<h1> YOU WIN </h1><h2>AGAINST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Win(pc,us)
        }
        if(pc == 'Paper'){
            res = '<h1>YOU LOSE</h1> <h2>AGANIST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px;" onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Lose(pc,us)
        }

    }
    if(us == 'Paper'){
        if(pc == 'Paper'){
            res = '<h1>TIE UP</h1><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">REPLAY</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Tie(pc)
        }
        if(pc == 'Rock'){
            res = '<h1> YOU WIN</h1><h2> AGAINST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Win(pc,us)
        }
        if(pc == 'Scissor'){
            res = '<h1>YOU LOSE </h1><h2>AGANIST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px;" onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Lose(pc,us)
        }

    }
    if(us == 'Scissor'){
        if(pc == 'Scissor'){
            res = '<h1>TIE UP</h1><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">REPLAY</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Tie(pc)
        }
        if(pc == 'Paper'){
            res = '<h1> YOU WIN </h1><h2>AGAINST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px; " onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Win(pc,us)
        }
        if(pc == 'Rock'){
            res = '<h1>YOU LOSE</h1> <h2>AGANIST THE PC</h2><button style="border-radius: 12px;width: 174px;height: 44px;" onclick = "PlayAgain()">PLAY AGAIN</button>'
            document.getElementsByClassName('Banner')[0].style.color = 'white'
            document.getElementsByClassName('Banner')[0].innerHTML = res
            Lose(pc,us)
        }

    }
}

OptionSelected = (e) => {
    pcOption = arr[Math.floor(Math.random()*arr.length)]
    console.log(pcOption)
    console.log(e);
    Winner(pcOption,e)
}
