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

