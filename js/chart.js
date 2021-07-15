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
    { time: '2021-07-11', value: 80.01 },
    { time: '2021-07-12', value: 96.63 },
    { time: '2021-07-13', value: 76.64 },
    { time: '2021-07-14', value: 81.89 },
    { time: '2021-07-15', value: 74.43 },
    { time: '2021-07-16', value: 80.01 },
    { time: '2021-07-17', value: 96.63 },
    { time: '2021-07-18', value: 76.64 },
    { time: '2021-07-19', value: 81.89 },
    { time: '2021-07-20', value: 74.43 },
]);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://trade.wayofthe.net", false)

let chartFormattedOrders = []

try {
    xhr.send()
    if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        let resp = JSON.parse(xhr.response);
        let s, p, c = ''
        for (let x = 0; x < resp.length; x++){
            if (resp[x].order_type == 'BUY') {
                s = 'arrowUp';
                p = 'aboveBar';
                c = 'green';
            } else {
                s = 'arrowDown';
                p = 'belowBar';
                c = 'red';
            }
            let obj = {
                time: resp[x].time.slice(0, 10),
                position: p,
                color: c,
                shape: s,
                text: resp[x].quantity.toString()
            }
            chartFormattedOrders.push(obj)
        }
        console.log(chartFormattedOrders)
        lineSeries.setMarkers(chartFormattedOrders)
    }
} catch(err) {
    alert("Request Failed")
}

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
