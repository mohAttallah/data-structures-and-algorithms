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

    size() {
        return this.adjacencyList.size;
    }
}


module.exports = Graph;
const one = new Vertext("1");
const two = new Vertext("2");
const three = new Vertext("3");
const graph = new Graph();
graph.addVertext(one);
graph.addVertext(two);
graph.addVertext(three);

graph.addEdge(one, two);
graph.addEdge(one, three)
graph.addEdge(two, three);

console.log(graph.getVertices())
console.log(graph.size())


// for (const [k, v] of graph.adjacencyList.entries()) {
//     console.log('key =>', k, 'V=> ', v)
// }


