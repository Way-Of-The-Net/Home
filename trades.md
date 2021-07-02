---
title: Tracking Success
subtitle: >-
  Here you'll find a listing of the latest trades made by our algorithms and their 
  current profits/losses.
custom-javascript-list:
  - "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"
seo:
  title: Trade
  description: This is the style guide page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Style Guide
      keyName: property
    - name: 'og:description'
      value: This is the style guide page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Style Guide
    - name: 'twitter:description'
      value: This is the style guide page
layout: page
---
## Lastest Trades
Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, this is marked text ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis. Fusce et ipsum et nulla tristique facilisis.

## Profits
<table>
    <caption>Table with thead, tfoot, and tbody</caption>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

## Losses
<table>
    <caption>Table with thead, tfoot, and tbody</caption>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

### Miscellaneous Statistics

Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis.

**This is not financial advice.**

<script>
  const chart = LightweightCharts.createChart(document.getElementById("lastest-trades"), { width: 400, height: 300 });
  const lineSeries = chart.addLineSeries();
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
</script>