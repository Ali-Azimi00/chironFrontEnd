import React, { useState, useEffect, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../styles/charts.css';
import axios from 'axios';
import { ServerResponse } from "http";
import userEvent from '@testing-library/user-event';

interface ITasks {
    taskId: number;
    taskName: string;
    measureOfTask: string;
    minReq: number,
    exPoints: 2,
    [key: string]: number | string
}

interface IExperience {
    experienceId: number;
    completedQty: number;
    tasks: ITasks;
    date: Date;
}

interface IData {
    date: Date;
    taskName: String;
    quantity: number;
}

interface ISeries {
    name: String;
    data: Array<number> | undefined;
}

function ProgChart({ }: Object) {

    const [progData, setProgData] = useState<IExperience[]>([])
    const [data1, setData1] = useState<IData[]>([])
    const [currentDates, setCurrentDates] = useState<any>([])

    let dateMap = new Map<Date, IExperience>([])
    for (let i=0; i< progData.length; i++){
        let currentProg = progData[i];
        dateMap.set(currentProg.date,currentProg)
    }
    /////////////////////////////////////////////
    let taskMap = new Map<String, ITasks>()
    for (let i = 0; i < progData.length; i++) {
        let currentProg = progData[i];
        taskMap.set(currentProg.tasks.taskName, currentProg.tasks)
    }
    console.log('taskMap', taskMap)

    ///////////////////////////////////////////////////////////

    let dataMap = new Map<String, IData>()
    for (let i = 0; i < progData.length; i++) {
        let currentDataProg = progData[i];
        dataMap.set(currentDataProg.tasks.taskName, data1[i])
    }

    ///////////////////////////////////////////////////////////
    let seriesMap = new Map<String, ISeries>()

    taskMap.forEach((value, key) => {
        let seriesPt = {
            name: key,
            data: []
        }
        seriesMap.set(key, seriesPt)
    })

    for (let i = 0; i < progData.length; i++) {
        let currentProg = progData[i]

        seriesMap.forEach((value, key1) => {
            // console.log('key/value',key1,value)
            let quantity: any = currentProg.completedQty;

            if (currentProg.tasks.taskName == key1) {
                let prevData: any | undefined = seriesMap.get(key1)?.data
                prevData?.push(quantity)
                // console.log('prevData', key1, prevData)
                let value1: ISeries = {
                    name: key1,
                    data: prevData
                }
                seriesMap.set(key1, value1)
            }
        })
        //  console.log("seriesMap",seriesMap)
        // seriesMap.set(currentProg.tasks.taskName, currentSeriesData)

    }
    console.log("push", seriesMap.get('push'))


    const fetchProgData = useCallback(async () => {
        try {
            const url = "http://localhost:8080/experience/1";
            const response = await axios.get(url)
            setProgData(response.data)
        }
        catch (error) {
            console.error("axios call failed")
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchProgData();
    }, [fetchProgData])

    const updateData = () => {
        setData1((prevState) => {
            let pd = { ...prevState }
            for (let i = 0; i < progData.length; i++) {
                let currentData: IData = {
                    date: progData[i].date,
                    taskName: progData[i].tasks.taskName,
                    quantity: progData[i].completedQty
                }
                pd[i] = currentData
            }
            return pd
        })
    }

    useEffect(() => {
        updateData();
    }, [progData])
    // console.log('data', data1)

    //////////////////////////////////////////////////////////////////////////////////////////


    //complete:1, incomoplete: 3, nothing: 0
    const [series, setSeries] = useState<any>([
        // {
        //     name: 'reading',
        //     data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        // },
        // {
        //     name: 'push',
        //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // },
        // {
        //     name: 'sprint',
        //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // },

    ]);

    // const updateSeries = () => {
    //     const seriesArr = new Array<any>();

    //     for (let i = 0; i < data1.length; i++) {
    //         seriesArr.push(data1[i])
    //     }
    //     console.log('seriesArr', seriesArr)

    //     setSeries(seriesArr)
    // }

    useEffect(()=>{
        updateSeries();
        giveDates();
    },[progData])

    function updateSeries(){
        setSeries(()=>{
            let pd : any = []
            seriesMap.forEach((value,key:String)=>{
                let dataPt = {
                    name: key,
                    data: value.data
                }
                pd.push(dataPt)
            })
            return pd;
        })

    }

    console.log('SERIES', series)

    const [options, setOptions] = useState<any>(
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
                    color: '#39d353',
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
                        colors: ["#3f3f3f", "#3f3f3f", "#3f3f3f",
                            "#3f3f3f", "#3f3f3f", "#3f3f3f",
                            "#3f3f3f", "#3f3f3f", "#3f3f3f",
                            "#3f3f3f", "#3f3f3f", "#3f3f3f"]
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
                        colors: ["#3f3f3f", "#3f3f3f", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
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
                    blur: 3,
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
            //DATE GOES HERE
            labels: currentDates,
            // ["8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21", "8/21"],
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
                        inverse: true,
                        min: 0,
                        max: 3
                    },
                }
            }
        }
    );

    const giveDates=()=>{
        // let dateArr: any[]=[]

        // dateMap.forEach((value,key)=>{

        //     let keyString = key.toString()

        //     dateArr.push(keyString)
        // })

        // console.log(dateArr)
        // return [dateArr];
        setCurrentDates(()=>{
            let pd: Array<String>=[]

            // for(let i=0; i<dateMap.size;i++){
                dateMap.forEach((value,key)=>{

                    let formattedDate: String = value.date.toString();
                    console.log('pd2222', formattedDate.slice(5))

                    pd.push(formattedDate.slice(5))
                })
                console.log('pd3333', pd)

            return pd
        })

        setOptions((prevState:any)=>{
            let pd={...prevState}
            pd.labels= currentDates
           return pd;
        })
        console.log('currentDates',options)
    }

    return (
        <div id="" className="">
            <ReactApexChart
                options={options} series={series}
                type="heatmap" height={350}

                hidden={false}
            />
            {/* <button onClick={()=>{
                console.log(progData)
            }}> here </button> */}
        </div>
    )
}

export default ProgChart;