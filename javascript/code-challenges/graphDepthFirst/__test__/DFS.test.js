const Graph = require('../index');

describe('Graph', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();

    });

    it('return the nodes DFS ', () => {
        const one = "1";
        const two = "2";
        const three = "3";
        const four = "4";
        graph.addVertext(one);
        graph.addVertext(two);
        graph.addVertext(three);
        graph.addVertext(four);

        graph.addEdge(one, two);
        graph.addEdge(one, three);
        graph.addEdge(two, three);
        graph.addEdge(two, three);
        graph.addEdge(three, one);
        graph.addEdge(three, four);

        expect(graph.DFS(one)).toEqual(new Set(['1', '2', '3']));
        expect(graph.DFS(two)).toEqual(new Set(['2', '3']));
        expect(graph.DFS(three)).toEqual(new Set(['1', '3',"4"]));

    });

    it('returns an empty set for an empty graph', () => {
        const emptyGraph = new Graph();
        expect(emptyGraph.DFS('A')).toEqual(null);
    });

    it('returns a single-node set for a graph with one node', () => {
        const singleNodeGraph = new Graph();
        singleNodeGraph.addVertext('A');
        expect(singleNodeGraph.DFS('A')).toEqual(new Set(['A']));
    });

});
