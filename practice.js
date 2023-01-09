// // class Graph {
// //     constructor(vertices)
// //     {
// //         this.vertices = vertices;
// //         this.adjList = new Map();
// //     }

// //     addVertex(v){
// //         this.adjList.set(v, [])
// //     }

// //     addEdge(v, w){
// //         this.adjList.get(v).push(w);
// //         this.adjList.get(w).push(v);
// //     }

// //     printGraph(){
// //         const getKeys = this.adjList.keys();

// //         for(let i of getKeys){
// //             const getValues = this.adjList.get(i);
// //             let conc = "";

// //             for(let j of getValues)
// //             conc+= j+ " ";
// //             console.log(i+ " ->" + conc)
// //         }
// //     }
// // };

// // bfs(startingPosition){
// //     let visited = {};

// //     let queue = [];

// //     visited[startingPosition] = true;
// //     queue.enqueue(startingPosition);

// //     while(!queue.isEmpty()){

// //     }
// // }

// // const g = new Graph(6);

// // const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F'];

// // for(let i = 0; i<vertices.length; i++){
// //     g.addVertex(vertices[i])
// // }

// // g.addEdge('A', 'B');
// // g.addEdge('A', 'D');
// // g.addEdge('A', 'E');
// // g.addEdge('B', 'C');
// // g.addEdge('D', 'E');
// // g.addEdge('E', 'F');
// // g.addEdge('E', 'C');
// // g.addEdge('C', 'F');

// // console.log(g)

// // g.printGraph()


// // class Knight {
// //     constructor([h = null, v = null],[hstart = null, vstart = null]){
// //         this.moves = {
// //             1: [h - 2, v - 1],
// //             2: [h - 1, v - 2],
// //             3: [h - 2, v + 1],
// //             4: [h - 1, v + 2],
// //             5: [h + 2, v - 1],
// //             6: [h + 1, v - 2],
// //             7: [h + 2, v + 1],
// //             8: [h + 1, v + 2]}
// //     }   
// // }


// class Chessboard {
//     constructor(){
//         this.board = this.makeBoard(8)
//     }

//     makeBoard(size){
//         let board = {};
        
//         for(let i = 0; i<size; i++){
//             for(let j = 0; j<size; j++ ){
//                 board[i]=[0,1,2,3,4,5,6,7]; 
//             }
//         }
//         return board
//         // console.log(board)
//         console.log(board[4][6])
//     }

//     knightMoves([hstart, vstart], [hend, vend]){

//         let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
//         let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

//         let queue = [];
//         let visited = {};
//         let nextMove = [hstart, vstart];
//         let count = 0;
       
//         while(nextMove.length>0){ 
//             count++
//             console.log(nextMove)
//             if(nextMove[0]===hend&&nextMove[1]===vend) return console.log(count)
//             // console.log(nextMove)
            
       
//         for (let i = 0; i < 8; i++){
//             let x = nextMove[0] + X[i]
//             let y = nextMove[1] + Y[i]

//             if(x >= 0 && y >= 0 && x < 8 && y < 8 && !visited[nextMove]){
//                 visited[nextMove] = true;
//                 queue.push([x,y]) 
//             }
//         }

     

        
//         // if(!(visited.includes(nextMove))){
//         //     visited.push(nextMove);
            
//         // }else if(!(visited.includes([hend, vend]))){
//         //     count++
//         // }
//         nextMove = queue.shift()


//         visited[nextMove] = true;
//         // console.log(visited)

//         // if(visited[nextMove]==)
//         // console.log(visited.includes(nextMove))
//         // console.log(queue)
//         console.log(nextMove)

//         }
//         // console.log(visited)
//         // console.log(nextMove)

//         // visited.push([hstart, vstart])
//         // visited.push([hend, vend])
//         // for(let i = 0; i<visited.length; i++){
        
//         // console.log(this.board[hstart][vstart])
//         // console.log(hend + "," + this.board[hend][vend])

//     }
// }

// // const knight = new Knight;
// // console.log(knight)

// // console.log(knight.moves[2])

// let board = new Chessboard;
// console.log(board)

// board.knightMoves([3,3], [4,3])

// // const possibleMoves = [
// //     [i - 2, j - 1],
// //     [i - 1, j - 2],
// //     [i - 2, j + 1],
// //     [i - 1, j + 2],
// //     [i + 2, j - 1],
// //     [i + 1, j - 2],
// //     [i + 2, j + 1],
// //     [i + 1, j + 2],
// //   ];




// class ChessBoard {
//     constructor(){
//         this.adjList = {};
//     }

//     addSquare = (x, y) =>{
//         this.adjList[[x,y]] = [];
//         return[x,y];
//     }

//     addEdge = (square1, square2) =>{
//         this.adjList[square1].push(square2)
//     }

//     possibleMoves = (x, y, n) => {
//         let square = this.addSquare(x,y);

//         if ((x+2 < n) && (y+1 < n)) {
//             this.addEdge(square, [x+2,y+1]);
//          }
//          if ((x-2 >= 0) && (y+1 < n)) {
//             this.addEdge(square, [x-2,y+1]);
//          }
//          if ((x+2 < n) && (y-1 >= 0)) {
//             this.addEdge(square, [x+2,y-1]);
//          }
//          if ((x-2 >= 0) && (y-1 >= 0)) {
//             this.addEdge(square, [x-2,y-1]);
//          }
//          if ((x+1 < n) && (y+2 < n)) {
//             this.addEdge(square, [x+1,y+2]);
//          }
//          if ((x+1 < n) && (y-2 >= 0)) {
//             this.addEdge(square, [x+1,y-2]);
//          }
//          if ((x-1 >= 0) && (y+2 < n)) {
//             this.addEdge(square, [x-1,y+2]);
//          }
//          if ((x-1 >= 0) && (y-2 >= 0)) {
//             this.addEdge(square, [x-1,y-2]);
//     }
// }
//     allPossibleMoves = (x, y, n) =>{
//         if(!this.adjList[`${x},${y}`]){
//             this.possibleMoves(x,y,n);
//             this.adjList[`${x},${y}`].map(child=>{
//                 {
//                     this.allPossibleMoves(child[0], child[1], n);
//                 }
//             })
//         }
//     }

//     numberOfKnightMoves = ([xStart, yStart], [xEnd, yEnd], n = 8) =>{
//         this.allPossibleMoves(xStart, yStart, n);

//         let distance = {};
//         distance[[xStart, yStart]] = 0;
        
//         let parent = {};
//         parent[[xStart, yStart]] = null;

//         let currentSquareList = this.adjList[`${xStart},${yStart}`];

 
//         let queue = [];

//         currentSquareList.forEach(square => {
//             distance[square] = 1;
//             parent[square] = [xStart, yStart];
//             queue.push(square)
//         });

//         let visited = {};
//         visited[[xStart, yStart]] = true;

//         while(queue.length > 0){
        
//             let current = queue.shift();
         

//             if(current[0]==xEnd && current[1]==yEnd){
//                 let path = [[xEnd, yEnd]];
              
//                 let predecessor = parent[[xEnd, yEnd]];
              
//                 while(predecessor !==null){
//                     path.unshift(predecessor)
//                     predecessor = parent[predecessor]
                    
//                 }
               
//                 return [distance[current], path]
//             }
     

//         if (this.adjList[`${current[0]},${current[1]}`] &&
//         !visited[`${current[0]},${current[1]}`]) {
//         this.adjList[`${current[0]},${current[1]}`].forEach(square => {
//         if(!visited[`${square[0]},${square[1]}`]) {
//          queue.push(square);
        
//             parent[square] = current;

//          distance[square] = distance[current]+1;

//          visited[[current[0],current[1]]] = true;
//         }
//       });
//    }
// }

    
//     } 

// }



// const board = new ChessBoard();

// const numberOfKnightMoves = board.numberOfKnightMoves([3,3],[4,3]);
// console.log("Number of moves to reach the goal: ", numberOfKnightMoves[0]);
// console.log("And the path is:", numberOfKnightMoves[1])


class Square {
    constructor([x,y]){
        this.position = [x,y]
        this.adjList = [];
    }

    addAdjacency = ([x, y])=>{
        if(( x + 2 < 8)&&( y + 1 < 8)) {
            let nSquare = new Square([x + 2, y + 1])
            nSquare.addAdjacency([x + 2, y + 1])
            this.adjList.push(nSquare)};
        if(( x - 2 >= 0)&&( y + 1 < 8)) this.adjList.push([x - 2, y + 1]);
        if(( x + 2 < 8)&&( y - 1 >= 0)) this.adjList.push([x + 2, y - 1]);
        if(( x - 2 >= 0)&&( y - 1 >= 0)) this.adjList.push([x - 2, y - 1]);
        if(( x + 1 < 8)&&( y + 2 < 8)) this.adjList.push([x + 1, y + 2]);
        if(( x + 1 < 8)&&( y - 2 >= 0)) this.adjList.push([x + 1, y -2]);
        if(( x - 1 >=0)&&( y + 2 < 8)) this.adjList.push([x - 1, y + 2]);
        if(( x - 1 >= 0)&&( y - 2 >= 0)) this.adjList.push([x -1, y - 2]);        
    }
    



}


class Board {
    constructor([xStart, yStart], [xEnd, yEnd]){
        
        const startingPosition = new Square([xStart, yStart]);


        // addAdjacency = (square1, square2)=>{

        // }
    //     addSquare = (x, y) =>{
    //         this.adjList[[x,y]] = [];
    //         return[x,y];
    //     }
    
    //     addEdge = (square1, square2) =>{
    //         this.adjList[square1].push(square2)
    //     }
    
    //     possibleMoves = (x, y, n) => {
    //         let square = this.addSquare(x,y);
    
    //         if ((x+2 < n) && (y+1 < n)) {
    //             this.addEdge(square, [x+2,y+1]);
    //          }
    //          if ((x-2 >= 0) && (y+1 < n)) {
    //             this.addEdge(square, [x-2,y+1]);
    //          }
    //          if ((x+2 < n) && (y-1 >= 0)) {
    //             this.addEdge(square, [x+2,y-1]);
    //          }
    //          if ((x-2 >= 0) && (y-1 >= 0)) {
    //             this.addEdge(square, [x-2,y-1]);
    //          }
    //          if ((x+1 < n) && (y+2 < n)) {
    //             this.addEdge(square, [x+1,y+2]);
    //          }
    //          if ((x+1 < n) && (y-2 >= 0)) {
    //             this.addEdge(square, [x+1,y-2]);
    //          }
    //          if ((x-1 >= 0) && (y+2 < n)) {
    //             this.addEdge(square, [x-1,y+2]);
    //          }
    //          if ((x-1 >= 0) && (y-2 >= 0)) {
    //             this.addEdge(square, [x-1,y-2]);
    //     }
    // }
    }
}


const square = new Square([3,3])
square.addAdjacency([3,3])