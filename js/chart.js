const chart = LightweightCharts.createChart(document.getElementById("tradingview"), {
    height: 500,
    priceScale: {
        autoScale: true
    },
});

const lineSeries = chart.addAreaSeries({
    title: 'THE PRICE',
    scaleMargins: {
        top: 0.6,
        bottom: 0.05,
    },
});

// TODO: Gather this data from database stored at Steve's
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);

lineSeries.setMarkers([
    {
        time: '2019-04-09',
        position: 'aboveBar',
        color: 'black',
        shape: 'arrowUp',
    },
]);

const priceLine = lineSeries.createPriceLine({
    price: 80.0,
    color: 'green',
    lineWidth: 2,
    lineStyle: LightweightCharts.LineStyle.Dotted,
    axisLabelVisible: true,
    title: 'P/L 500',
});

priceLine.applyOptions({
    autosize: true,
    price: 90.0,
    color: 'red',
    lineWidth: 3,
    lineStyle: LightweightCharts.LineStyle.Dashed,
    axisLabelVisible: false,
    title: 'P/L 600',
    timeScale: {
        rightOffset: 12,
        barSpacing: 3,
        fixLeftEdge: true,
    }
});
chart.timeScale().fitContent()
