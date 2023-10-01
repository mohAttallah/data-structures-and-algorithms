const Graph = require('../assests/Graph');
const businessTrip = require('../index');
describe('businessTrip', () => {

    it('direct route', () => {
        const graph = new Graph();
        const amman = 'amman';
        const tafila = 'tafila';

        graph.addVertext(amman);
        graph.addVertext(tafila);

        graph.addEdge(amman, tafila, 30);

        const cities = [amman, tafila];
        const result = businessTrip(graph, cities);

        expect(result).toBe(30);
    });

    it('calculate the cost for a valid trip with multiple cities', () => {
        const graph = new Graph();
        const amman = 'amman';
        const tafila = 'tafila';
        const aqapa = 'aqapa';

        graph.addVertext(amman);
        graph.addVertext(tafila);
        graph.addVertext(aqapa);

        graph.addEdge(amman, tafila, 30);
        graph.addEdge(tafila, aqapa, 10);
        graph.addEdge(amman, aqapa, 50);

        const cities = [amman, tafila, aqapa];
        const result = businessTrip(graph, cities);

        expect(result).toBe(40);
    });


    it('return null for an invalid trip ', () => {
        const graph = new Graph();
        const amman = 'amman';
        const tafila = 'tafila';

        graph.addVertext(amman);

        const cities = [amman, tafila];
        const result = businessTrip(graph, cities);

        expect(result).toBeNull();
    });

    it('return null for an invalid trip with less than 2 cities', () => {
        const graph = new Graph();
        const amman = 'amman';

        graph.addVertext(amman);

        const cities = [amman];
        const result = businessTrip(graph, cities);

        expect(result).toBeNull();
    });
})
