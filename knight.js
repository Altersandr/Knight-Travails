class ChessBoard {
    constructor(){
        this.adjList = {};
    }

    addSquare = (x, y) =>{
        this.adjList[[x,y]] = [];
        return[x,y];
    }

    addEdge = (square1, square2) =>{
        this.adjList[square1].push(square2)
    }

    possibleMoves = (x, y, n) => {
        let square = this.addSquare(x,y);

        if ((x+2 < n) && (y+1 < n)) {
            this.addEdge(square, [x+2,y+1]);
         }
         if ((x-2 >= 0) && (y+1 < n)) {
            this.addEdge(square, [x-2,y+1]);
         }
         if ((x+2 < n) && (y-1 >= 0)) {
            this.addEdge(square, [x+2,y-1]);
         }
         if ((x-2 >= 0) && (y-1 >= 0)) {
            this.addEdge(square, [x-2,y-1]);
         }
         if ((x+1 < n) && (y+2 < n)) {
            this.addEdge(square, [x+1,y+2]);
         }
         if ((x+1 < n) && (y-2 >= 0)) {
            this.addEdge(square, [x+1,y-2]);
         }
         if ((x-1 >= 0) && (y+2 < n)) {
            this.addEdge(square, [x-1,y+2]);
         }
         if ((x-1 >= 0) && (y-2 >= 0)) {
            this.addEdge(square, [x-1,y-2]);
    }
}
    allPossibleMoves = (x, y, n) =>{
        if(!this.adjList[`${x},${y}`]){
            this.possibleMoves(x,y,n);
            this.adjList[`${x},${y}`].map(child=>{
                {
                    this.allPossibleMoves(child[0], child[1], n);
                }
            })
        }
    }

    numberOfKnightMoves = ([xStart, yStart], [xEnd, yEnd], n = 8) =>{
        this.allPossibleMoves(xStart, yStart, n);

        let distance = {};
        distance[[xStart, yStart]] = 0;
        
        let parent = {};
        parent[[xStart, yStart]] = null;

        let currentSquareList = this.adjList[`${xStart},${yStart}`];

 
        let queue = [];

        currentSquareList.forEach(square => {
            distance[square] = 1;
            parent[square] = [xStart, yStart];
            queue.push(square)
        });

        let visited = {};
        visited[[xStart, yStart]] = true;

        while(queue.length > 0){
        
            let current = queue.shift();
         

            if(current[0]==xEnd && current[1]==yEnd){
                let path = [[xEnd, yEnd]];
              
                let predecessor = parent[[xEnd, yEnd]];
              
                while(predecessor !==null){
                    path.unshift(predecessor)
                    predecessor = parent[predecessor]
                    
                }
               
                return [distance[current], path]
            }
     

        if (this.adjList[`${current[0]},${current[1]}`] &&
        !visited[`${current[0]},${current[1]}`]) {
        this.adjList[`${current[0]},${current[1]}`].forEach(square => {
        if(!visited[`${square[0]},${square[1]}`]) {
         queue.push(square);
        
            parent[square] = current;

         distance[square] = distance[current]+1;

         visited[[current[0],current[1]]] = true;
        }
      });
   }
}

    
    } 

    numberOfKnightMovesDepthFirst([xStart, yStart], [xEnd, yEnd], visited = new Set(), n = 8, parent = {}){
        let start = arguments[0];
        let end = arguments[1];


        if(start ===end){
            let path = [end];
            let predecessor = parent[end]
            while(predecessor!==null){
                path.unshift(predecessor)
                predecessor = parent[predecessor]
                    
            }
            return{moves:0,
            path:path}

            }
      

        visited.add(start);

        let moves = this.adjList

        console.log(moves)

        let minMoves = -1;
        let minPath = [];

        for(let move of moves){
            if(!visited.has(move)){
                parent[move] = start
                let result = this.numberOfKnightMovesDepthFirst(move, end, visited, parent)

                if(result.moves !==1){
                    if(minMoves ===-1 || result.moves+1<minMoves){
                        minMoves = result.moves +1;
                        minPath = result.path;
                    } 
                }
            }
        }
        return {
            moves: minMoves,
            path: minPath
        }
     
    }

}



const board = new ChessBoard();

const numberOfKnightMoves = board.numberOfKnightMoves([3,3],[4,3]);
console.log("Number moves to reach the goal:", numberOfKnightMoves[0]);
console.log("And the path the Knight took is:", numberOfKnightMoves[1])