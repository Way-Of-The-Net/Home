const chart = LightweightCharts.createChart(
    document.getElementById("tradingview"),
    {
        height: 500,
        priceScale: {
            autoScale: true
        },
        title: 'THE PRICE',
        scaleMargins: {
            top: 0.6,
            bottom: 0.05,
        },
        upColor: '#6495ED',
        downColor: '#FF6347',
        borderVisible: false,
        borderColor: '#000000',
        borderUpColor: '#4682B4',
        borderDownColor: '#A52A2A',
        wickVisible: true,
        wickColor: '#000000',
        wickUpColor: '#4682B4',
        wickDownColor: '#A52A2A',
        timeScale: {
            visible: true,
            timeVisible: true,
            secondsVisible: false,
        },
        localization: {
            priceFormatter: price =>
                '$' + price.toFixed(2)
            ,
        },
    }
);

fetch("https://trade.wayofthe.net/ticker/RKT")
    .then(response => response.json())
    .then(r => {
        let customChart = []
        for (let x = 0; x < r.t.length; x++){
            let d = new Date(r.t[x])
            customChart.push({
                time: (r.t[x] - 14400), // -14400 milliseconds = -4 hrs from UTC
                open: r.o[x],
                high: r.h[x],
                low: r.l[x],
                close: r.c[x],
            })
        }

        let csSeries = chart.addCandlestickSeries();
        csSeries.setData(customChart)
        chart.timeScale().fitContent()
    })