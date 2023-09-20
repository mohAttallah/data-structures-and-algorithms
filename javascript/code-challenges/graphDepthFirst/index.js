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
            console.log('We cannot have an edge without starting and ending vertex');
            return;
        }
        const startVertexEdges = this.adjacencyList.get(start);
        const edge = new Edge(end, weight);
        startVertexEdges.push(edge);
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

    size() {
        return this.adjacencyList.size;
    }

    DFS(startNode) {
        const visited = new Set();
        if (!this.adjacencyList.has(startNode)) {
            return null;
        }
        this.traverseDFS(startNode, visited);
        return visited;
    }

    traverseDFS(node, visited) {
        if (typeof (node) === "string") visited.add(node)
        if (typeof (node) === "object") visited.add(node.vertex)
        if (this.adjacencyList.has(node)) {
            
            for (const neighbor of this.adjacencyList.get(node)) {
                if (!visited.has(neighbor)) {
                    this.traverseDFS(neighbor, visited);
                }
            }
        }
    }

}


const graph = new Graph();

const one = "1";
const two = "2";
const three = "3";


graph.addVertext(one);
graph.addVertext(two);
graph.addVertext(three);

graph.addEdge(one, two);
graph.addEdge(one, three);
graph.addEdge(two, three);



console.log('Depth-First Traversal starting from "1":');
console.log("ss", graph.DFS(two));


module.exports = Graph;