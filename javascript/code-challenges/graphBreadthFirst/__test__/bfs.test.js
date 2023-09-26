const Graph = require('../index')


describe('Graph BFS', () => {
    it(' iterate BFS traversal starting from node A', () => {
        const graph = new Graph();

        const A = 'A';
        const B = 'B';
        const C = 'C';
        const D = 'D';
        const E = 'E';

        graph.addVertext(A);
        graph.addVertext(B);
        graph.addVertext(C);
        graph.addVertext(D);
        graph.addVertext(E);

        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(B, D);
        graph.addEdge(D, E);
        graph.addEdge(E, A);

        const bfsResult = graph.BFS(A);

        expect(bfsResult).toEqual([A, B, D, E, C]);
    });

    it(' iterate BFS traversal starting from node D', () => {
        const graph = new Graph();

        const A = 'A';
        const B = 'B';
        const C = 'C';
        const D = 'D';
        const E = 'E';

        graph.addVertext(A);
        graph.addVertext(B);
        graph.addVertext(C);
        graph.addVertext(D);
        graph.addVertext(E);

        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(B, D);
        graph.addEdge(D, E);
        graph.addEdge(E, A);

        const bfsResult = graph.BFS(D);

        expect(bfsResult).toEqual([D, E, A, B,  C]);
    });

    it('return null for a non-existent start node', () => {
        const graph = new Graph();

        const bfsResult = graph.BFS('Null');

        expect(bfsResult).toBeNull();
    });
});
