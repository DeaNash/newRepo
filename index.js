const createButton = document.querySelector("#spawn");
const mainBoard = document.querySelector("#main");
const monster1 = new Monster("shrek", "green",
    "https://i.ytimg.com/vi/LEmTf7A5Xl4/maxresdefault.jpg", { x: "400px", y: "400px" })
const monster2 = new Monster("clown", "funny",
    "https://cdn.ebaumsworld.com/mediaFiles/picture/604025/85925971.jpg", { x: "300px", y: "200px" })
const monster3 = new Monster("woman", "in red",
    "https://images.pexels.com/photos/247122/pexels-photo-247122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", { x: "500px", y: "100px" })

const monsters = [];
//
monsters.push(monster1, monster2, monster3)

createButton.addEventListener("click", function () {
    randomPositioning(monsters)
    draw(monsters)
})

for (let index = 0; index < monsters.length; index++) {

}

monsters.forEach(function (monster) {
    console.log(monster)
});

function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function (monster) {
        card = createImgDiv(monster)
        mainBoard.append(card)
    });
}

function createImgDiv(monster) {
    const bigDiv = document.createElement("div");
    const img = monster.getCard(200, 200)
    img.addEventListener("click", function () {
        selectMonster(this.id, monsters)
    })
    if (monster.selected === true) {
        const button1 = document.createElement("button")
        button1.innerHTML = "➡️"
        button1.style = "position: absolute;right: 0; top: 50%;"
        button1.addEventListener("click", function () {
            moveMonster(this.parentElement.id, monsters, 10, "x")
        })
        const button2 = document.createElement("button")
        button2.innerHTML = "➡️"
        button2.style = "position: absolute;left: 50%; top: 20"
        button2.style.transform = "rotate(270deg)"
        button2.addEventListener("click", function () {
            moveMonster(this.parentElement.id, monsters, -10, "y")
        })
        const button3 = document.createElement("button")
        button3.innerHTML = "➡️"
        button3.style = "position: absolute;left: 0; top: 50%; transform : scaleX(-1)"
        button3.addEventListener("click", function () {
            moveMonster(this.parentElement.id, monsters, -10, "x")
        })
        const button4 = document.createElement("button")
        button4.innerHTML = "➡️"
        button4.style = "position: absolute;left: 50%; bottom: 0;"
        button4.style.transform = "rotate(90deg)"
        button4.addEventListener("click", function () {
            moveMonster(this.parentElement.id, monsters, 10, "y")
        })
        img.append(button1, button2, button3, button4);
    }
    bigDiv.append(img)

    return bigDiv
}

function randomPositioning(arr) {
    arr.forEach(function (monster) {
        const x = getRandomInt(screen.width)
        const y = getRandomInt(screen.height)
        monster.setXpos(x)
        monster.setYpos(y)
    });
}

function findMonster(id, arr) {
    let result = {}
    arr.forEach(function (monster) {
        if (id === monster.id) {
            result = monster
        }
    })
    return result
}

function selectMonster(id, arr) {

    arr.forEach(function (monster) {
        if (id === monster.id) {
            monster.selected = true;
        }
        else {
            monster.selected = false;
        }
    })

    draw(monsters)

}

function moveMonster(id, arr, amount, dir) {
    let monster = findMonster(id, arr)
    const a = parseInt(monster[dir]);
    const newLoc = a + amount;
    monster[dir] = `${newLoc}px`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* setTimeout(() => {
    monster1.setPicture("https://cdn.ebaumsworld.com/thumbs/2019/04/02/072350/85925938/creepy2.jpg")
    monster1.setXpos(20)
    draw(monsters)
}, 1000)


setTimeout(() => {
    monster1.setXpos(400)
    draw(monsters)
}, 4000)

 */




/*  */