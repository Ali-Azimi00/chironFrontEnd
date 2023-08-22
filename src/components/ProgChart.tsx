import React, { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts'
import '../styles/charts.css'


function ProgChart({ }: Object) {

    const [showChart, setShowChart] = useState(false)
    console.log(showChart)

    useEffect(() => {
        setShowChart(false)
    }, [showChart])

    const [series] = useState<any>([
        {
            name: 'Water',
            data: [1, 3, 1, 1, 3, 1, 3, 1, 3, 3, 1, 3]
        },
        {
            name: 'Stretch',
            data: [1, 3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1]
        },
        {
            name: 'Potion',
            data: [1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1, 3]
        },
        {
            name: 'Read',
            data: [1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 3, 1]
        },
        {
            name: 'Language',
            data: [3, 1, 3, 3, 1, 1, 3, 1, 1, 3, 1, 1,]
        },
        {
            name: 'Push',
            data: [1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 3, 1]
        },
        {
            name: 'Pull',
            data: [1, 3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1]
        },
        {
            name: 'Core',
            data: [1, 1, 3, 1, 3, 1, 1, 3, 3, 3, 1,3]
        },
        {
            name: 'Cardio',
            data: [3, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1,]
        }
    ]);

    console.log(series.length)
    const [options] = useState<Object>(
        {

            // states: {
            //     normal: {
            //         filter: {
            //             type: 'none',
            //             value: 0,
            //         }
            //     },
            //     hover: {
            //         filter: {
            //             type: 'none',
            //             value: 0.15,
            //         }
            //     },
            //     active: {
            //         allowMultipleDataPointsSelection: true,
            //         filter: {
            //             type: 'darken',
            //             value: 0.35,
            //         }
            //     },
            // },




            theme: {
                mode: 'dark',
                // palette: 'palette1',
                monochrome: {
                    enabled: false,
                    color: '#ffc107',
                    shadeTo: 'dark',
                    shadeIntensity: .5
                },
            },
            xaxis: {
                lines: {
                    show: false
                },
                labels: {
                    rotate: -90,
                    style: {
                        colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
                    }
                },
                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: '#6f42c1',
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                }

            },
            yaxis: {
                lines: {
                    show: false
                },
                labels: {
                    show: false,
                    align: 'right',
                    maxWidth: 160,
                    style: {
                        colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
                    },
                    offsetX: -17,
                    offsetY: 0,
                    rotate: 0,

                },

            },
            chart: {
                width: 300,
                background: '#',
                type: 'heatmap',
                toolbar: {
                    show: false
                },
                fill: {
                    color: ["#"],
                    opacity: 0
                }
                ,
                dropShadow: {
                    enabled: true,
                    top: 0,
                    left: 0,
                    blur: 6,
                    color: '#fff',
                    opacity: .4
                },
                offsetX: 0,
                offsetY: 0,
                axisBorder: {
                    show: false,
                    color: "#dc3545"
                },
                xaxis: {
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {

                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#282c34"],
            tooltip: {
                enabled: true,
            },
            legend: {
                show: false
            },
            labels: ["8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21"],
            grid: {
                show: false,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            plotOptions: {
                heatmap: {
                    radius: 0,
                    enableShades: true,
                    shadeIntensity: .1,
                    reverseNegativeShade: false,
                    //When enabled, it will reverse the shades for negatives but keep 
                    //the positive shades as it is now. An example of such use-case would 
                    //be in a profit/loss chart where darker reds mean larger losses, 
                    //darker greens mean larger gains.
                    distributed: true,
                    useFillColorAsStroke: false,
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 1,
                            color: "#ffc107",
                            // foreColor: "#dc3545",
                            name: undefined,
                        }],
                        inverse: false,
                        min: 0,
                        max: 3
                    },
                }
            }
        }
    );

    return (
        <div id="" className="">
            <ReactApexChart
                options={options} series={series}
                type="heatmap" height={350}
                onClick={() => {
                    setShowChart(true)
                }}
                hidden={false}
            />
        </div>
    )
}

export default ProgChart;