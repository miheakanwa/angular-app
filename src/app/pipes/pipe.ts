// import { Pipe, PipeTransform } from '@angular/core';
// import { DateParseFormatter } from '@utils/DateParseFormatter';
// import { CshoIdResult } from 'app/timetracking/model/ChsoIdResult';

// @Pipe({
//   name: 'complianceAssistanceFilterPipe'
// })
// export class ComplianceAssistanceFilterPipe implements PipeTransform {
//   transform(value, args: string[]): any {
//     let keys = [];
//     let isDateRange: boolean = false;
//     for (let key in value) {
//       if (
//         value[key] != '' &&
//         value[key] != null &&
//         key != 'page' &&
//         key != 'pageNum' &&
//         key != 'pageSize' &&
//         key != 'sortField' &&
//         key != 'sortOrder' 
//         //key != 'stratgPlnTypCd'
//       ) {
//         if ((key == 'beginDate' || key == 'endDate') && !isDateRange) {
//           var disp_key = 'Date Range';
//           let dfp: DateParseFormatter = new DateParseFormatter();
//           keys.push({
//             key: 'dateRange',
//             disp_key: disp_key,
//             value:
//               dfp.format(value['beginDate']) +
//               ' - ' +
//               dfp.format(value['endDate'])
//           });
//           isDateRange = true;
//         } else if (key != 'beginDate' && key != 'endDate') {
//           var disp_key = key.charAt(0).toUpperCase() + key.slice(1);
//           disp_key = disp_key.replace(/([a-z])([A-Z])/g, '$1 $2');

//           if (key == 'programCode' || key == 'state.dispName') {
//             if (key == 'state.dispName' && value['state.dispName'] != '') {
//               keys.push({
//                 key: key,
//                 disp_key: disp_key,
//                 value: value[key]
//               });
//             } else if (key != 'state.dispName') {
//               keys.push({
//                 key: key,
//                 disp_key: disp_key,
//                 value: value[key]
//               });
//             }
//           } else {


//             if (key === "state") {
//               let state = value[key];
//               if (state.dispName) {
//                 keys.push({ key: key, disp_key: 'state', value: state.dispName });
//               }
//             } else if (key === "cshoId") {
//               let cid = value[key];
//               if (cid.dispValue) {
//                 keys.push({ key: key, disp_key: "CSHO ID", value: cid.dispValue});
//               }
//             } else if(key == "rid"){
//               let rid = value[key];
//               disp_key = "RID";
//               if (rid.officeName) {
//                 keys.push({ key: key, disp_key: disp_key, value: rid.officeName });
//               }
//             } else if(key==="stateActivityId"){
//               keys.push({ key: key, disp_key: "State Activity ID", value: value[key] });
//             } else if (key === "interfaceState") {
//               let iState=value[key];
//               if (iState.dispName) {
//                 keys.push({ key: key, disp_key: disp_key, value: iState.dispName });
//               }
//             } else if (key === "programArea") {
//               let pArea=value[key];
//               if (pArea.dispValue) {
//                 keys.push({ key: key, disp_key: disp_key, value: pArea.dispValue });
//               }
//             }
            
//             else if(key==="taskScopeInd"){
//               keys.push({ key: key, disp_key: "Task Scope", value: value[key] == "M" ? "Multiple" : "Single" });
//             }
//             else {
//               keys.push({ key: key, disp_key: disp_key, value: value[key] });
//             }
//           }
//         }
//       }
//     }
//     return keys;
//   }
// }

