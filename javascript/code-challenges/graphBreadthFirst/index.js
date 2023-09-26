'use strict';
const Edge = require("./assests/Edge");
const Vertext = require("./assests/Vertext");

class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertext(vertext) {
        this.adjacencyList.set(vertext, [])
        return vertext;
    }

    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('We cannot have an edge without starting and ending vertext');
            return;
        }
        const startvertext = this.adjacencyList.get(start)
        const edge = new Edge(end, weight);
        startvertext.push(edge);
    }

    getVertices() {
        if (this.adjacencyList.size === 0) return "there is no any vertex on Graph"
        const collection = [];
        for (const [k] of this.adjacencyList.entries()) {
            collection.push(k);
        }
        return collection;
    }

    getNeighbors(vertex) {
        //check if there is a vertex or not 
        const collection = [];
        if (!this.adjacencyList.has(vertex)) return ('We cannot have an edge without starting and ending vertext');
        for (const [k, v] of this.adjacencyList.entries()) {
            if (k === vertex) {
                collection.push(...v);
            }

        }
        return collection.length > 0 ? collection : "there are no vertices";
    }

    BFS(startNode) {
        if (!this.adjacencyList.has(startNode)) {
            return null;
        }

        const visited = new Set();
        const result = [];

        const bfs = (currentNode) => {
            visited.add(currentNode)
            result.push(currentNode)

            const neighbors = this.adjacencyList.get(currentNode);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    bfs(neighbor.vertex)
                }
            }
        };

        bfs(startNode);

        return result;
    }



    size() {
        return this.adjacencyList.size;
    }
}

module.exports = Graph;

const graph = new Graph();

const A = 'A'
const B = 'B'
const C = 'C'
const D = 'D'
const E = 'E'

graph.addVertext(A);
graph.addVertext(B);
graph.addVertext(C);
graph.addVertext(D);
graph.addVertext(E)

graph.addEdge(A, B);
graph.addEdge(A, C);
graph.addEdge(B, D);
graph.addEdge(D, E);
graph.addEdge(E, A);


console.log('A:', graph.BFS(A));
console.log('D:', graph.BFS(D));
console.log('E:', graph.BFS(E));


