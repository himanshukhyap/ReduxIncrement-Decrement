

import { jsondata } from './jsondata';
let Data = [];
let DataObject = {}
let MonthObject = {}
let sum = 0;
let sumJAK = 0;
export default function Datafilter() {
  for (const key in jsondata) {
    DataObject = {
        Country: jsondata[key].Country,
        Month: []
    }
    for (let index = 0; index < 8; index++) {

        for (const v in jsondata[key].Other) {
            if (jsondata[key].Other[v].Product !== null) {
                sum += jsondata[key].Other[v].MonthStatics[index].Value
            }


        }
        for (const vj in jsondata[key].JAKClass) {
            if (jsondata[key].JAKClass[vj].Product !== null) {
                sumJAK += jsondata[key].JAKClass[vj].MonthStatics[index].Value
            }
           
        }
        MonthObject = {
            month: jsondata[key].Other[0].MonthStatics[index].dtFromStr,
            Total_Value: sum,
            JAK_Value: sumJAK,
            percentage: sumJAK * 100 / sum
        }
        DataObject.Month.push(MonthObject)
        sum = 0;
        sumJAK = 0;
    }
    Data.push(DataObject)
}
console.log(jsondata)
console.log(Data)
  return (
  
   <>
  <h1>sds</h1>
   </>
  );
}


