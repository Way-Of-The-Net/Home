const chart = LightweightCharts.createChart(document.getElementById("tradingview"), {
    height: 500,
    priceScale: {
        autoScale: true
    },
});

const candleStickSeries = chart.addCandlestickSeries({
    title: 'THE PRICE',
    scaleMargins: {
        top: 0.6,
        bottom: 0.05,
    },
    upColor: '#6495ED',
    downColor: '#FF6347',
    borderVisible: false,
    wickVisible: true,
    borderColor: '#000000',
    wickColor: '#000000',
    borderUpColor: '#4682B4',
    borderDownColor: '#A52A2A',
    wickUpColor: '#4682B4',
    wickDownColor: '#A52A2A',
});

// let chartFormattedOrders = []
// fetch("https://trade.wayofthe.net")
//     .then(response => response.json())
//     .then(t => {
//         let s, p, c = ''
//         for (let x = 0; x < t.length; x++){
//             if (t[x].order_type === 'BUY') {
//                 s = 'arrowUp';
//                 p = 'aboveBar';
//                 c = 'green';
//             } else {
//                 s = 'arrowDown';
//                 p = 'belowBar';
//                 c = 'red';
//             }
//             let obj = {
//                 time: t[x].time.slice(0, 10),
//                 position: p,
//                 color: c,
//                 shape: s,
//                 text: t[x].quantity.toString()
//             }
//             chartFormattedOrders.push(obj)
//         }
//         lineSeries.setMarkers(chartFormattedOrders)
//     })

let customChart = []
fetch("http://localhost:8080/ticker/RKT")
    .then(response => response.json())
    .then(t => {
        // if time is < 1 day, use this format:
        // d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay(),
        for (let x = 0; x < t.o.length; x++){
            // let d = new Date(t.t[x] * 1000)
            let obj = {
                time: t.t[x],
                open: t.o[x],
                high: t.h[x],
                low: t.l[x],
                close: t.c[x],
            }
            customChart.push(obj)
        }
        candleStickSeries.setData(customChart)
    })


console.log(customChart)
// const priceLine = lineSeries.createPriceLine({
//     price: 80.0,
//     color: 'green',
//     lineWidth: 2,
//     lineStyle: LightweightCharts.LineStyle.Dotted,
//     axisLabelVisible: true,
//     title: 'P/L 500',
// });
//
// priceLine.applyOptions({
//     autosize: true,
//     price: 90.0,
//     color: 'red',
//     lineWidth: 3,
//     lineStyle: LightweightCharts.LineStyle.Dashed,
//     axisLabelVisible: false,
//     title: 'P/L 600',
//     timeScale: {
//         rightOffset: 12,
//         barSpacing: 3,
//         fixLeftEdge: true,
//     }
// });

chart.timeScale().fitContent()
