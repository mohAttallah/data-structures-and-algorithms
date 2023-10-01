'use strict'
const Graph = require('./assests/Graph')

function businessTrip(graph, cityNames) {
    if (!Array.isArray(cityNames) || cityNames.length < 2) {
        return null;
    }

    let totalCost = 0;

    for (let i = 0; i < cityNames.length - 1; i++) {
        const currCity = cityNames[i];
        const nextCity = cityNames[i + 1];

        if (!graph.adjacencyList.has(currCity)) return null;

        const neighborsCity = graph.getNeighbors(currCity);
        let edgeFound = false;

        for (const edge of neighborsCity) {
            if (edge.vertex === nextCity) {
                totalCost += edge.weight
                edgeFound = true;
                break;
            }
        }

        if (!edgeFound) return null;
    }
    return totalCost;
}

module.exports = businessTrip;

const amman = 'amman';
const tafila = 'tafila';
const aqapa = 'aqapa';

const graph = new Graph();
graph.addVertext(amman);
graph.addVertext(tafila);
graph.addVertext(aqapa);

graph.addEdge(amman, tafila, 30);
graph.addEdge(tafila, aqapa, 10);
graph.addEdge(amman, aqapa, 50);

let cities = [amman, tafila, aqapa];

console.log(businessTrip(graph, cities));