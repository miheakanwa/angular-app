 import {EmployeePrimaryInfo} from '../models/EmpPrimaryInfoModel';
import { EmployeeContact } from '../models/EmpAddressModel';

 export interface Employee{
     empPrimaryInfo: EmployeePrimaryInfo;
     address: Array<EmployeeContact>;
 }