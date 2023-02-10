import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import csvFile from "../epl_stats.csv"
import TableLayout from "./TableLayout";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const followersMarks = [
    {
      value: 0,
      scaledValue: 1980,
      label: "1980"
    },
    {
      value: 10,
      scaledValue: 1985,
      label: "1985"
    },
    {
      value: 20,
      scaledValue: 1990,
      label: "1990"
    },
    {
      value: 30,
      scaledValue: 1995,
      label: "1995"
    },
    {
      value: 40,
      scaledValue: 2000,
      label: "2000"
    },
    {
      value: 50,
      scaledValue: 2005,
      label: "2005"
    },
    {
      value: 60,
      scaledValue: 2010,
      label: "2010"
    }
  ];    
  
  const scaleValues = (valueArray) => {
    return [scale(valueArray[0]), scale(valueArray[1])];
  };
  const scale = (value) => {
    if (value === undefined) {
      return undefined;
    }
    const previousMarkIndex = Math.floor(value / 10);
    const previousMark = followersMarks[previousMarkIndex];
    const remainder = value % 10;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }
    const nextMark = followersMarks[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 10;
    return remainder * increment + previousMark.scaledValue;
  };

const AppLayout = () => {
    const ShowHideColumns=[
        {name: "Players", show : true},
        {name: "Nation", show : true},
        {name: "Pos", show : true},
        {name: "Squad", show : true},
        {name: "Age", show : true},
        {name: "Born", show : true}
    ];

    const [header,setHeader] = useState(ShowHideColumns);
    const [csvData, setCsvData] = useState();
    const [filteredcsvData, setFilteredCsvData] = useState();
    const [Agevalue, setAgeValue] = useState([20,37]);
    const [BirthValue, setBirthValue] = React.useState([30,40]);
    const [scaleBirthVal,setScaleBirthVal] = React.useState([1995,2000]);

    useEffect(()=> {
        CSVToJSON(csvFile);
    },[]);

    //function to convert CSV To JSON
    const CSVToJSON = csv => {
        const lines = csv;
        const keys = lines[0];
        const x =  lines.slice(1).map(line => {
            return line.reduce((acc, cur, i) => {
                const toAdd = {};
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
            }, {});
        });

        //setHeader(keys);
        setCsvData(x);
        const data = ApplyFilter(x);
        setFilteredCsvData(data);
    };

    //function to applyFilter //csvdata, Agevalue, scaleBirthVal, ageChecked, BornChecked
    function ApplyFilter(csvData){
        return header[4].show && header[5].show ? (csvData.filter(item  => 
            parseInt(item?.Age?.split("-")[0]) >= Agevalue[0] && 
            parseInt(item?.Age?.split("-")[0]) <= Agevalue[1] &&
            parseInt(item?.Born) >= parseInt(scaleBirthVal[0]) &&
            parseInt(item?.Born) <= parseInt(scaleBirthVal[1])))
            : (
                header[4].show ? (csvData.filter(item  => parseInt(item?.Age?.split("-")[0]) >= Agevalue[0] && parseInt(item?.Age?.split("-")[0]) <= Agevalue[1]))
                  :
                header[5].show ? (csvData.filter(item  =>parseInt(item?.Born) >= parseInt(scaleBirthVal[0]) && parseInt(item?.Born) <= parseInt(scaleBirthVal[1]))) : (csvData)
            )
    };

    //function for hide and show columns
    function toggleColumns(event){
        const {name , checked} =  event;
        const columns = header.map(item => {
            if(item.name === name){
                item.show = checked
                return item
            }
            else{
                return item;
            }
        })
        setHeader(columns);
    }

    //function to convert JSON to CSV or JSON to pdf
    function convertJsonToCSVOrPDF(objArray, keys, conversionType) {
        const arr = [];
        let csv = "";
        keys.map(item => {
            if(item.show){
                arr.push(item.name)
            }
        });

        if(conversionType === "pdf"){
            var doc = new jsPDF();
            var rows = [];
        }
        else
        {
            csv = arr.join(',');
        }
        
        objArray.forEach((row) => {
            let values = [];
            arr.forEach((key) => {
                key==="Nation" ? values.push(row[key]?.split(" ")[1] || '') : (
                    key==="Age" ? values.push(row[key]?.split("-")[0] || '') :
                     values.push(row[key] || '')
                )
            });
            conversionType === "pdf" ? rows.push(values) : csv += '\n' + values.join(',');
        });

        if(conversionType === "pdf"){
            // doc.autoTable(arr, rows);
            autoTable(doc,{
                head : [arr],
                body : rows
            })
            doc.save('epl_statsFilteredData.pdf');  //pdf file to be downloaded
        }
        else
        {
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            
            //CSV file to be downloaded
            hiddenElement.download = 'epl_statsFilteredData.csv';
            hiddenElement.click();
        }
        
      }

    return (
        <div className="flex">
           <div className="ml-12">
                <div className="border border-black mt-24 p-4">
                    {header.map((item,index)=> 
                        (
                            <div>
                                <input 
                                    key={index}
                                    type="checkbox"
                                    checked={item.show}
                                    name={item.name}
                                    onChange={(e) => {
                                        toggleColumns(e.target);
                                        if(e.target.name==="Age" || e.target.name==="Born"){
                                            setFilteredCsvData(ApplyFilter(csvData))
                                        }
                                    }}
                                />
                                <span className="p-2">{item.name}</span>
                            </div>
                        )
                    )}
                </div>
                <div className="m-2 p-4 border border-black">
                    <Box sx={{ width: 500 }}>
                        <p className="m-2 mb-8 underline">Age - ({Agevalue[0]} - {Agevalue[1]}) </p>
                        <Slider
                            value={Agevalue}
                            onChange={(e,newVal) => setAgeValue(newVal) }
                            valueLabelDisplay="on"
                            marks
                            
                        />
                        <p className="m-2 p-2 underline">Born - ({scaleBirthVal[0]} - {scaleBirthVal[1]})</p>
                        <Slider
                            value={BirthValue}
                            min={0}
                            step={2}
                            max={60}
                            marks={followersMarks}
                            scale={scaleValues}
                            onChange={(e, newVal) => {setBirthValue(newVal); setScaleBirthVal(scaleValues(BirthValue))}}
                            valueLabelDisplay="on"
                        />
                        {/* <p>Values: {JSON.stringify(scaleValues(BirthValue))}</p> */}

                    </Box>
                    <div className="text-center">
                        <input 
                            type="button"
                            value = "Apply"
                            className="p-2 m-2 bg-blue-500 hover:bg-slate-400 cursor-pointer"
                            onClick={() =>{
                                const data = ApplyFilter(csvData);
                                setFilteredCsvData(data);
                            }} 
                        />
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="text-3xl font-bold m-2 p-2">Total Counts : {filteredcsvData?.length}</div>
                    <div>
                        <input type="button" value="export csv"  className="m-2 p-2 bg-slate-400 hover:bg-slate-600 cursor-pointer" onClick={()=> convertJsonToCSVOrPDF(filteredcsvData, header, "csv")}/>
                        <input type="button" value="export pdf"  className="m-2 p-2 bg-slate-400 hover:bg-slate-600 cursor-pointer" onClick={()=> convertJsonToCSVOrPDF(filteredcsvData, header, "pdf")}/>
                    </div>
                </div>
                <table className="w-full p-2  mx-3 text-center table-auto border-separate border-spacing-2 border border-slate-400">
                    <thead>
                        <tr>
                            {header?.map((item,index) =>
                                item.show && <th key={index} className="border border-slate-300">{item.name}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredcsvData && filteredcsvData.map(item => (
                            <TableLayout 
                                ageChecked={header[4].show}
                                PlayerChecked={header[0].show} 
                                BornChecked={header[5].show}
                                PosChecked={header[2].show}
                                NationChecked={header[1].show}
                                SquadChecked = {header[3].show}
                                key={item.Rk}
                                {...item}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
