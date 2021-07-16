const backgroundColor = [
  'rgba(75,192,192,0.2)',
  'rgb(240,219,79,0.2)',
  'rgb(245,133,54,0.2)',
  'rgb(132,79,209,0.2)',
  'rgb(206,103,154,0.2)',
];
const borderColor = [
  'rgba(75,192,192, 1)',
  'rgba(240,219,79, 1)',
  'rgba(245,133,54,1)',
  'rgba(132,79,209, 1)',
  'rgba(206,103,154, 1)',
];

export default function createData(data, date) {
  // set of Multi-line data
  if(!Array.isArray(data)){
    return [];
  } 
  
  const label = [
    ...new Set(
      data.map((ele) => {
        return ele.type;
      })
    ),
  ];
 // set of x-axis data
  const labels = [
    ...new Set(
      data.map((ele) => {
        return ele.time;
      })
    ),
  ];
  
  // filter acc by data
  const datafilters = label.map((key) => {
    return data.filter((ele) => {
      return ele.date === date && ele.type === key;
    });
  });

 // set of y-axis
  let Store = {};
  for (let idx = 0; idx < datafilters.length; idx++) {
    Store[datafilters[idx][0].type] = datafilters[idx].map((ele) => {
      return ele.value;
    });
  }
  
  // set of graph datasets
  const datasets = label.map((ele, idx) => {
    let obj = {};
    obj['label'] = ele;
    obj['data'] = Store[ele];
    obj['fill'] = true;
    obj['backgroundColor'] = backgroundColor[idx];
    obj['borderColor'] = borderColor[idx];
    obj['borderWidth'] = 1;
    return obj;
  });

  // graph data
  return { labels: labels, datasets: datasets };
}
