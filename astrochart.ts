export class AstroChart {

    private astrochart: any;

    constructor() {
        this.astrochart = require('./AstroChart/AstroChart.js')();
        console.log(this.astrochart)
    }
}

export const astroChart = new AstroChart();