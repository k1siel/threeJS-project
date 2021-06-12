class Reversi {
    constructor() {
        this.basicTable = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, "w", "b", 0, 0, 0],
            [0, 0, 0, "b", "w", 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    checkPlaces(color, array) {
        let xd = array
        let you = ""
        let noyou = ""
        if (color == "w") {
            you = "w"
            noyou = "b"
        } else {
            you = "b"
            noyou = "w"
        }
        let skr = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]

        let tabela = function (i, p, o) {
            let tab = [
                [i - p, o],
                [i + p, o],
                [i, o - p],
                [i, o + p],
                [i - p, o - p],
                [i + p, o + p],
                [i - p, o + p],
                [i + p, o - p]
            ]

            return tab
        }

        for (let i = 0; i < 8; i++) {
            for (let o = 0; o < 8; o++) {
                if (xd[i][o] == you) {
                    var p = 1
                    let tab = tabela(i, p, o)
                    for (let q = 0; q < 8; q++) {
                        var p = 1
                        tab = tabela(i, p, o)
                        try {
                            if (xd[tab[q][0]][tab[q][1]] == noyou) {
                                while (xd[tab[q][0]][tab[q][1]] == noyou) {
                                    p += 1
                                    tab = tabela(i, p, o)
                                }
                                if (xd[tab[q][0]][tab[q][1]] == 0) {
                                    skr[tab[q][0]][tab[q][1]] = 1
                                }
                            }
                        } catch (error) {}
                    }
                }
            }
        }
        return skr
    };

    move(color, array, gameY, gameX) {
        let xd = array
        let you = ""
        let noyou = ""
        if (color == "w") {
            you = "w"
            noyou = "b"
        } else {
            you = "b"
            noyou = "w"
        }
        let i = gameY
        let o = gameX
        var list = []
        var pomlist = []
        list.push([i, o])

        let tabela = function (i, p, o) {
            let tab = [
                [i - p, o],
                [i + p, o],
                [i, o - p],
                [i, o + p],
                [i - p, o - p],
                [i + p, o + p],
                [i - p, o + p],
                [i + p, o - p]
            ]

            return tab
        }
        var p = 1
        let tab = tabela(i, p, o)
        for (let q = 0; q < 8; q++) {
            pomlist = []
            var p = 1
            tab = tabela(i, p, o)
            try {
                if (xd[tab[q][0]][tab[q][1]] == noyou) {
                    while (xd[tab[q][0]][tab[q][1]] == noyou) {
                        pomlist.push([tab[q][0], tab[q][1]])
                        p += 1
                        tab = tabela(i, p, o)
                    }
                    if (xd[tab[q][0]][tab[q][1]] == you) {
                        for (let j = 0; j < pomlist.length; j++) {
                            list.push(pomlist[j])
                        }
                    }
                }
            } catch (error) {}
        }
        for (let k = 0; k < list.length; k++) {
            xd[list[k][0]][list[k][1]] = you
        }
        // console.log(xd, list, pomlist)
        return xd
    }
    //to jest array z checkPlaces
    moveCheck(moveArray) {
        var skr = moveArray
        var brak_ruchu = false
        for (let f = 0; f < 8; f++) {
            for (let g = 0; g < 8; g++) {
                if (skr[f][g] == 1) {
                    brak_ruchu = true
                } else {}
            }
        }
        // if true tu już wiesz co się ma dziać, ja nwm jak to wygląda
        // nie odsyła się nic do klientów
        // zmiana tury
        // checkPlaces dla tego co ma ruch
        // i wtedy odsyłanie
        // pewnie trzeba to całe w paczke zebrać typu funkcja(xyz){i tu cała sekwencja kończaca się moveCheck if true else}
        // i bedzie działać
    }
}


module.exports = Reversi