// class Graph {
//     constructor(vertices)
//     {
//         this.vertices = vertices;
//         this.adjList = new Map();
//     }

//     addVertex(v){
//         this.adjList.set(v, [])
//     }

//     addEdge(v, w){
//         this.adjList.get(v).push(w);
//         this.adjList.get(w).push(v);
//     }

//     printGraph(){
//         const getKeys = this.adjList.keys();

//         for(let i of getKeys){
//             const getValues = this.adjList.get(i);
//             let conc = "";

//             for(let j of getValues)
//             conc+= j+ " ";
//             console.log(i+ " ->" + conc)
//         }
//     }
// };

// bfs(startingPosition){
//     let visited = {};

//     let queue = [];

//     visited[startingPosition] = true;
//     queue.enqueue(startingPosition);

//     while(!queue.isEmpty()){

//     }
// }

// const g = new Graph(6);

// const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F'];

// for(let i = 0; i<vertices.length; i++){
//     g.addVertex(vertices[i])
// }

// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// console.log(g)

// g.printGraph()


// class Knight {
//     constructor([h = null, v = null],[hstart = null, vstart = null]){
//         this.moves = {
//             1: [h - 2, v - 1],
//             2: [h - 1, v - 2],
//             3: [h - 2, v + 1],
//             4: [h - 1, v + 2],
//             5: [h + 2, v - 1],
//             6: [h + 1, v - 2],
//             7: [h + 2, v + 1],
//             8: [h + 1, v + 2]}
//     }   
// }


class Chessboard {
    constructor(){
        this.board = this.makeBoard(8)
    }

    makeBoard(size){
        let board = {};
        
        for(let i = 0; i<size; i++){
            for(let j = 0; j<size; j++ ){
                board[i]=[0,1,2,3,4,5,6,7]; 
            }
        }
        return board
        // console.log(board)
        console.log(board[4][6])
    }

    knightMoves([hstart, vstart], [hend, vend]){

        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

        let queue = [];
        let visited = [];
        let nextMove = [hstart, vstart];
        let count = 0;
       
        while(nextMove.length>0){ 
            if(nextMove[0]===hend&&nextMove[1]===vend) return console.log(count)
            // console.log(nextMove)
            
       
        for (let i = 0; i < 8; i++){
            let x = nextMove[0] + X[i]
            let y = nextMove[1] + Y[i]

            if(x >= 0 && y >= 0 && x < 8 && y < 8){
                queue.push([x,y]) 
            }
        }
        nextMove = queue.shift()
        if(!(visited.includes(nextMove))){
            visited.push(nextMove);
            
        }
        console.log(visited.includes(nextMove))
        // console.log(queue)
        console.log(nextMove)

        }
        // console.log(visited)
        // console.log(nextMove)

        // visited.push([hstart, vstart])
        // visited.push([hend, vend])
        // for(let i = 0; i<visited.length; i++){
        
        // console.log(this.board[hstart][vstart])
        // console.log(hend + "," + this.board[hend][vend])

    }
}

// const knight = new Knight;
// console.log(knight)

// console.log(knight.moves[2])

let board = new Chessboard;
console.log(board)

board.knightMoves([3,3], [4,3])

// const possibleMoves = [
//     [i - 2, j - 1],
//     [i - 1, j - 2],
//     [i - 2, j + 1],
//     [i - 1, j + 2],
//     [i + 2, j - 1],
//     [i + 1, j - 2],
//     [i + 2, j + 1],
//     [i + 1, j + 2],
//   ];