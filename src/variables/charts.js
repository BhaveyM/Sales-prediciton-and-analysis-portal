export const barChartData = [
  {
    name: "Count",
    data: [1463, 932, 930, 930, 930, 929, 928, 926, 555],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: [1985, 1987, 1999, 1997, 2004, 2002, 2009, 2007, 1998],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
    
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: "#ED8936",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "40px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};
export const barChartData2 = [
  {
    name: "Count",
    data: [3350, 2785, 2388],
  },
];

export const barChartOptions2 = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ['Tier 3', 'Tier 2', 'Tier 1'],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
    
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: "#ED8936",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 45,
      columnWidth: "40px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};
export const lineChartData = [
  {
    name: "Item Type",
    data: [1232, 1200, 910, 856, 682, 649, 648, 520, 445, 425, 251, 214, 169, 148, 110, 64],
  },
  // {
  //   name: "Item Outlet Sales",
  //   data: [1232, 1200, 910, 856, 682, 649, 648, 520, 445, 425, 251, 214, 169, 148, 110, 64],
  // },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ['Fruits and Vegetables', 'Snack Foods', 'Household', 'Frozen Foods', 'Dairy', 'Canned', 'Baking Goods', 'Health and Hygiene', 'Soft Drinks', 'Meat', 'Breads', 'Hard Drinks', 'Others', 'Starchy Foods', 'Breakfast', 'Seafood'],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#3182CE"],
  },
  colors: ["#fff", "#3182CE"],
};
export const lineChartData2 = [
  {
    name: "Count",
    data: [1463, 932, 930, 930, 930, 929, 928, 926, 555],
  },
  // {
  //   name: "Item Outlet Sales",
  //   data: [1232, 1200, 910, 856, 682, 649, 648, 520, 445, 425, 251, 214, 169, 148, 110, 64],
  // },
];

export const lineChartOptions2 = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [1985, 1987, 1999, 1997, 2004, 2002, 2009, 2007, 1998],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#3182CE"],
  },
  colors: ["#fff", "#3182CE"],
};