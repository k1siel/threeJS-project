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

    checkPlaces(color, array){
        let xd = array
        let you = ""
        let noyou = ""
        if(color == "w"){
            you = "b"
            noyou = "w"
        }else{
            you = "w"
            noyou = "b"
        }
        let skr = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
            ]
            function tabela(){
            tab = [
                [i-p,o],
                [i+p,o],
                [i,o-p],
                [i,o+p],
                [i-p,o-p],
                [i+p,o+p],
                [i-p,o+p],
                [i+p,o-p]
            ]
        }
        
        for(i=0;i<8;i++){
            for(o=0;o<8;o++){
                if(xd[i][o] == you){
                    var p = 1
                    tabela()
                    for(q=0;q<8;q++){
                        var p = 1
                        tabela()
                        try{
                            if(xd[tab[q][0]][tab[q][1]] == noyou){        
                                while(xd[tab[q][0]][tab[q][1]] == noyou){
                                    p +=1
                                    tabela()
                                }
                                if(xd[tab[q][0]][tab[q][1]]==0){
                                skr[tab[q][0]][tab[q][1]] = 1
                                }
                            }
                        }catch(error){
                        }
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
        if(color == "w"){
            you = "b"
            noyou = "w"
        }else{
            you = "w"
            noyou = "b"
        }
        let i = gameY
        let o = gameX
        var list = []
        var pomlist = []
        list.push([i,o])
        function tabela(){
            tab = [
                [i-p,o],
                [i+p,o],
                [i,o-p],
                [i,o+p],
                [i-p,o-p],
                [i+p,o+p],
                [i-p,o+p],
                [i+p,o-p]
            ]
        }
        var p = 1
        tabela()
        for(q=0;q<8;q++){
            pomlist = []
            var p = 1
            tabela()
            try{
                if(xd[tab[q][0]][tab[q][1]] == noyou){
                    while(xd[tab[q][0]][tab[q][1]] == noyou){
                        pomlist.push([tab[q][0],tab[q][1]])
                        p +=1
                        tabela()
                    }
                    if(xd[tab[q][0]][tab[q][1]]==you){
                        for(j=0;j<pomlist.length;j++){
                            list.push(pomlist[j])
                        }
                    }
                }
            }catch(error){
            }
        }
        for(k=0;k<list.length;k++){
            xd[list[k][0]][list[k][1]] = you
        }
    }
}


module.exports = Reversi