
// Iteratively
const depthFirstSearchPrint = (graph, source) => {
    const stack = [ source ];

    while(stack.length > 0 ) {
        const current = stack.pop();
        console.log(current);
        for (const neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

// using recursion 
const depthFirstSearchPrintRecursive = (graph, source) => {
    console.log(source);
    for (const neighbour of graph[source]) {
        depthFirstSearchPrintRecursive(graph, neighbour);
    }
}

const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

depthFirstSearchPrint(graph, 'a'); //acebdf
depthFirstSearchPrintRecursive(graph, 'a') //abdfce