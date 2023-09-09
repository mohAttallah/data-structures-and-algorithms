const Edge = require("../assests/Edge");
const Vertex = require("../assests/Vertext");
const Graph = require("../index");

describe("Graph Class", () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it("add vertices to the graph", () => {
        const one = new Vertex("1");
        const two = new Vertex("2");

        graph.addVertext(one);
        graph.addVertext(two);

        expect(graph.getVertices()).toEqual([one, two]);
    });

    it(" add edges between vertices", () => {
        const one = new Vertex("1");
        const two = new Vertex("2");
        const three = new Vertex("3");

        graph.addVertext(one);
        graph.addVertext(two);
        graph.addVertext(three);

        graph.addEdge(one, two);
        graph.addEdge(one, three);
        graph.addEdge(two, three);

        const neighborsOfOne = graph.getNeighbors(one);
        expect(neighborsOfOne).toHaveLength(2);
        expect(neighborsOfOne).toContainEqual(new Edge(two, 0));
        expect(neighborsOfOne).toContainEqual(new Edge(three, 0));
    });

    it(" return the correct number of vertices", () => {
        const one = new Vertex("1");
        const two = new Vertex("2");

        graph.addVertext(one);
        graph.addVertext(two);

        expect(graph.size()).toBe(2);
    });
});
