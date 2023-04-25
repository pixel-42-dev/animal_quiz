let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);

let word = "";
let wordLen = 0;
let animals = ["ape", "bat", "cat", "cow", "dog", "fox", "pig", "rat", "yak"];
let isFound = false;
let mistakes = 0;

function restart() {
    a.disabled = false;
    b.disabled = false;
    c.disabled = false;
    d.disabled = false;
    e.disabled = false;
    f.disabled = false;
    g.disabled = false;
    h.disabled = false;
    i.disabled = false;
    j.disabled = false;
    k.disabled = false;
    l.disabled = false;
    m.disabled = false;
    n.disabled = false;
    o.disabled = false;
    p.disabled = false;
    q.disabled = false;
    r.disabled = false;
    s.disabled = false;
    t.disabled = false;
    u.disabled = false;
    v.disabled = false;
    w.disabled = false;
    x.disabled = false;
    y.disabled = false;
    z.disabled = false;
    word = "";
    wordLen = 0;
    answerNode.innerHTML = "";
}

// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {
    //resultNode.innerHTML = "Hello!!!";
    if (wordLen < 3) {
        alert("Введите три буквы!");
    } else {
        let animal = answerNode.innerHTML;
        isFound = false;
        for (ind = 0; ind < animals.length; ind++) {
            if (animal == animals[ind]) {
                isFound = true;
            }
        }
        if (isFound) {
            resultNode.innerHTML = "Вы выиграли!";
            restart();
            mistakes = 0;
        } else {
            if (mistakes < 2) {
                resultNode.innerHTML = "Такого животного нет. Остальсь попыток: " + (2 - mistakes);
                restart();
                mistakes++;
            } else {
                mistakes = 0;
                resultNode.innerHTML = "Такого животного нет. Вы проиграли :(";
                restart();
            }
        }
    }
});

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "a";
        wordLen += 1
        answerNode.innerHTML = word;
        a.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
b.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "b";
        wordLen += 1
        answerNode.innerHTML = word;
        b.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
c.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "c";
        wordLen += 1
        answerNode.innerHTML = word;
        c.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
d.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "d";
        wordLen += 1
        answerNode.innerHTML = word;
        d.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
e.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "e";
        wordLen += 1
        answerNode.innerHTML = word;
        e.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
f.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "f";
        wordLen += 1
        answerNode.innerHTML = word;
        f.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
g.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "g";
        wordLen += 1
        answerNode.innerHTML = word;
        g.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
h.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "h";
        wordLen += 1
        answerNode.innerHTML = word;
        h.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
i.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "i";
        wordLen += 1
        answerNode.innerHTML = word;
        i.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
j.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "j";
        wordLen += 1
        answerNode.innerHTML = word;
        j.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
k.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "k";
        wordLen += 1
        answerNode.innerHTML = word;
        k.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
l.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "l";
        wordLen += 1
        answerNode.innerHTML = word;
        l.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
m.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "m";
        wordLen += 1
        answerNode.innerHTML = word;
        m.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
n.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "n";
        wordLen += 1
        answerNode.innerHTML = word;
        n.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
o.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "o";
        wordLen += 1
        answerNode.innerHTML = word;
        o.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
p.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "p";
        wordLen += 1
        answerNode.innerHTML = word;
        p.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
q.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "q";
        wordLen += 1
        answerNode.innerHTML = word;
        q.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
r.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "r";
        wordLen += 1
        answerNode.innerHTML = word;
        r.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
s.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "s";
        wordLen += 1
        answerNode.innerHTML = word;
        s.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
t.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "t";
        wordLen += 1
        answerNode.innerHTML = word;
        t.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
u.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "u";
        wordLen += 1
        answerNode.innerHTML = word;
        u.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
v.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "v";
        wordLen += 1
        answerNode.innerHTML = word;
        v.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
w.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "w";
        wordLen += 1
        answerNode.innerHTML = word;
        w.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
x.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "x";
        wordLen += 1
        answerNode.innerHTML = word;
        x.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
y.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "y";
        wordLen += 1
        answerNode.innerHTML = word;
        y.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});
z.addEventListener(`click`, function () {
    if (wordLen < 3) {
        word += "z";
        wordLen += 1
        answerNode.innerHTML = word;
        z.disabled = true;
        resultNode.innerHTML = "";
    } else {
        alert("Не больше трёх букв!");
    }
});