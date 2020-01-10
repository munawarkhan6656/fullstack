import { OperationType } from './enum/operation-type.enum';
import { ElementRef } from '@angular/core';

export interface ValidationConfig {
  required?: string;
  whiteSpace: string;
  email: string;
  maxlength: string;
  minlength: string;
  invalidAlphabet: string;
  invalidNumber: string;
  invalidField: string;
  appValidateEqual: string;
  invalidEmailAddress: string;
  invalidPassword: string;
}

export interface SeatBooking {
  groupName: number;
  userId: number;
  seatNo: number;
}

export interface BusInTrip {
  Id: number;
  BusId: number;
  seatOccupy: number;
  status: string;
}

export interface Response<K> {
  paging: ResponsePaging;
  result: K;
  failedRecord: FailedRecord;
}

export interface FailedRecord {
  model: Model;
}

export interface Model {
  [key: string]: RequestFailure[];
}

export interface RequestFailure {
  name: string;
  description: string;
  uniqueIdentifier: number;
}

export interface ResponsePaging {
  orderBy: string;
  sortDirection: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface QueryParams {
  paging?: Paging;
  search?: SearchFilter;
}

export interface SearchFilter {
  placeHolder?: string;
  searchText?: string;
  status?: string;
  filters?: Array<string>;
  sort?: string;
  searchParams?: SearchParams;
  multiFilters?: Array<Filters>;
}

export interface SearchParams {
  description?: string;
  code?: string;
  sort?: string;
  active?: string;
  locationCode?: string;
  weightInPercentage?: string;
  weight?: string;
}

export interface Filters {
  key?: string;
  searchText?: string;
}

export interface Paging {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface Base {
  operationType?: OperationType
}

export interface FocusElement {
  setFocusOnFirstElement(element: ElementRef): void
}

export interface GridActionButton {
  isView?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
  isProceed?: boolean;
}
export interface BagCategory {
  id: number;
  categoryDescription: string;
  isDeleted: boolean;
  label?: string;
  value?: number;
}

export interface BagType {
  id?: number;
  bagCategoryNo: number;
  bagDesc: string;
  bagName: string;
  isDeleted?: boolean;
  active?: boolean;
  tareWeight: number;
  operationType?: number;
  label?: string;
  value?: number;
}

export interface ValidationError {
  [key: string]: boolean;
}

export interface Contract {
  id?: number;
  validTo: string;
  valideFrom: string;
  isDeleted: boolean;
  contractorCode: string;
  label?: string;
  value?: number;
}

export interface Contractor {
  id?: number;
  name: string;
  address?: string;
  cityCode?: number;
  countryCode?: string;
  zipCode?: string;
  state?: string;
  phone?: string;
  fax?: string;
  email?: string;
  uan?: string;
  url?: string;
  glCode?: string;
  remarks?: string;
  flag?: string;
  locationCode?: number;
  label?: string;
  value?: number;
}


export interface Location {
  id?: string;
  name: string;
  abbreviation?: string;
  shortAbbreviation?: string;
  contactPerson?: string;
  address?: string;
  cityCode?: number;
  countryCode?: number;
  phoneNo?: string;
  faxNo?: string;
  emailAddress?: string;
  webAddress?: string;
  remarks?: string;
  wareHouse?: string;
  active?: string;
  label?: string;
  value?: number;
}

export interface EmployeeInfo {
  employeeCode: string,
  employeeName: string,
  fatherName: string,
  oldNIC: string,
  cnic: string,
  address: string,
  gender: string,
  familyCode: string,
  bloodGroup: string,
  dob: string,
  initialAppDate: string,
  finalAppDate: string,
  gradeCode: string,
  departmentCode: string
  jobCode: string,
  contractorCode: string,
  contractNo: string,
  shiftCode: string,
  productionCode: string,
  stationCode: string,
  sessi: string,
  sessiNo: string,
  sessiDate: string,
  sessiAmount: string,
  eobi: string,
  eobiNo: string,
  eobiDate: string,
  eobiAmount: string,
  rateEffDate: string,
  ratePerDay: string,
  grossSalary: string,
  oldRate: string,
  hold: string,
  oldEmployeeNo: string,
  active: string,
  oldEmployeeCode: string,
  locationCode: string,
  iDate: string,
  reasonCode: string,
  nature: string,
  blackList: string,
  fullFinalDate: string
  replacementRecordId: string
  religionCode: string,
  holdDate: string,
  sectionRecordId: string,
  phoneNo: string,
  cellNo: string,
  offDay: string,
  effectiveDate: string,
  cnicExpiryDate: string,
  oldDepartmentCode: string,
  keyField: string,
  id: string,
  label?: string;
  value?: number;
}

export interface Parity {
  label: string;
  value: string;
}

export interface StopBit {
  label: string;
  value: string;
}

export interface ComPort {
  label: string;
  value: string;
}

export interface LotStatus {
  label: string;
  value: string;
}

// TODO: used it temporary purpose, will use the module interface from Nizar module later.
export interface Station {
  isGeneralStation?: string;
  id?: number;
  refId?: string;
  stationName: string;
  computerName?: string;
  locationCode?: number;
  locationName?: string;
  multipleStitchers?: string;
  allowManualWeighment: boolean;
  active?: string;
  allowSticker?: string;
  allowTrolly?: string;
  label?: string;
  value?: number;
}

export interface QualityCode {
  serialNo: number,
  storeCode: number,
  tFamilyCode: number,
  tTypeCode: number,
  tPatternCode: number,
  makeCode: number,
  systemCode: string,
  shortDescription: string,
  longDescription: string,
  requestNo: string,
  detailRecordId: number,
  greyWidth: number,
  greyLength: number,
  sUnitCode: number,
  greyWeight: number,
  wUnitCode: number,
  finshWidth: number,
  finalLength: number,
  sUnitCode2: number,
  finalWeight: number,
  wUnitCode2: number,
  quotaCode: string,
  blendCode: number,
  jpeg: string,
  remarks: string,
  flag: string,
  foxProCheck: string,
  pBucketCode: number,
  productClassificationId: number,
  id: string
}

export interface Rack {
  rollNo: string;
  rackNo: string;
  colorCode: string;
  qualityCode: string;
  operationType: number
  id: number;
  value: number;
  label: string;
}

export interface DropDownRack extends Rack {
  label: string;
  value: number;
}

export interface DropDown {
  label: string;
  value: number;
}

export interface DropDownPieces {
  name: string;
  code: number;
}

export interface Shift {
  shiftCode: string;
  shiftDetail: string;
  startTime: string;
  endTime: string;
  active: boolean;
  locationCode: number;
  operationType: number;
  id: number;
  label?: string;
  value?: string;
}

export interface SIR {
  oColorCode: string;
  qualityCode: string;
  id: number;
  operationType: number;
  osNo: number;
  qtyIssuePcs: number;
  qtyIssuedKgs: number;
  qtyReqKgs: number;
  qtyReqPcs: number;
  stCode: number;
  label?: string;
  value?: number;
}

export interface MTR {
  oColorCode: string;
  qualityCode: string;
  id: number;
  operationType: number;
  partyCode: number;
  qtyIssuePcs: number;
  qtyReqPcs: number;
  weightIssued: number;
  weightRequired: number;
  label?: string;
  value?: number;
}

export interface Menu {
  name: string;
  icon: string;
  route?: string;
  isActive?: boolean;
  subMenu?: Menu[];
  hasSubMenu?: boolean
  pageId?: number
}

export interface Cutting {
  id?: string;
  refId?: string;
  cuttingDesc: string;
  locationCode: string;
  stCode: string;
  remarks?: string;
  active: boolean;
}

export interface Stitcher {
  abbreviation: string;
  active: number;
  cCheck: string;
  eCheck: string;
  group: number;
  id: number;
  isInternalOrExternal: string;
  loc: string;
  locationCode: number;
  locationName?: number;
  name: string;
  nameBill: string;
  oldCode: string;
  oldLocationCode: null;
  operationType: number;
  packageMakerCode: number;
  packerCode: number;
  rOpen: string;
  sirRequired: string;
  stitcherName?: string;
  label?: string;
  value?: number;
  stCode?: number;
}

export interface Warehouse {
  name: string;
  id: number;
  operationType: number;
  label?: string;
  value?: number;
  locationName?: string;
  locationCode?: number;
  godownName?: string;
  godownCode?: number;
  active?: boolean;
  receivedProcessingStock?: boolean;
  balanceFinal?: boolean;
  markHBleach?: boolean;
}

export interface Driver {
  name: string;
  driverName?: string;
  id: number;
  operationType: number;
  label?: string;
  value?: number;
  locationName?: string;
  locationCode?: number;
  godownName?: string;
  active?: boolean;
  receivedProcessingStock?: boolean;
  balanceFinal?: boolean;
  markHBleach?: boolean;
}

export interface Checker {
  name: string;
  id: number;
  operationType: number;
  label?: string;
  value?: number;
}

export interface Container {
  id: number;
  operationType: number;
  label?: string;
  value?: string;
}

export interface Vehicle {
  name: string;
  id: number;
  operationType: number;
  label?: string;
  value?: number;
  locationName?: string;
  locationCode?: number;
  godownName?: string;
  active?: boolean;
  receivedProcessingStock?: boolean;
  balanceFinal?: boolean;
  markHBleach?: boolean;
}

export interface CentralCutting {
  active?: boolean;
  description?: string;
  id: number;
  operationType?: number;
  label?: string;
  value?: number;
  cuttingDesc?: string;
  stCode?: string;
  locationCode?: string;
  locationName?: string;
  name?: string;
}

export interface FromStitcherList {
  active?: boolean;
  description?: string;
  id: number;
  operationType?: number;
  label?: string;
  value?: number;
  cuttingDesc?: string;
  stCode?: string;
  locationCode?: string;
  locationName?: string;
  name?: string;
}

export interface Printing {
  id: number;
  locationCode: number;
  locationName: number;
  partyName: string;
  partyType: string;
  name: string;
  label?: string;
  value?: number;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export interface DecodedToken {
  AllLocation: number[];
  CurrentLocation: number;
  LocationName?: string;
  amr: string[];
  aud: string[];
  auth_time: number;
  client_id: string;
  exp: number;
  group_id: number[];
  id: string;
  idp: string;
  iss: string;
  module_id: number;
  nbf: number
  scope: string[];
  sub: string;
  username: string;
}

export interface Color {
  colorSno?: number;
  familyCode?: string;
  typeCode?: string;
  categoryCode?: number;
  oColorCode?: string;
  esnCode?: string;
  description?: string;
  pantonSno?: number;
  jpeg?: string;
  remarks?: string;
  createdBy?: number;
  createdOn?: string;
  processTypeId?: number;
  isActive?: boolean;
  lastModifiedBy?: string;
  lastModifiedOn?: string;
  operationType?: number;
  id: string;

  label?: string;
  value?: string;
}

export interface Pattern {
  code?: string;
  designCode?: string;
  colorWayCode?: number;
  active?: boolean;
  remarks?: string;
  operationType?: number;
  id: number;
}
export interface AcceptReturnBag {
  id?: 1
  operationType?: 0,
  date?: string;
  lastModifiedOn?: string;
  lastModifiedBy?: string;
  createdOn?: string;
  createdBy?: string;
  approvedOn?: string;
  approvedBy?: string;
  acceptedOn?: string;
  acceptedBy?: string;
  toId: any;
  toName?: string;
  fromId?: number;
  fromName?: string;
  fromType?: string;
  remarks?: string;
  returnBagDetails?: Array<ReturnBagDetail>;
}

export interface ReturnBagDetail {
  bagName?: string;
  returnBagId: number;
  bagId: number;
  bagQuantity: number;
  operationType: number;
  id: number;
}

export interface DropDown {
  label: string;
  value: number;
}


export interface GroupLine {
  id: number,
  groupNumber: number,
  operationName: string,
  sequence: number,
  menuLevel: string,
  addAllowed: string,
  editAllowed: string,
  deleteAllowed: string,
  printAllowed: string,
  postAllowed: string,
  unpostAllowed: string,
  closeAllowed: string,
  cancelAllowed: string
  transferAllowed: string,
  enabled: string,
  contentId: number,
  viewAllowed: string,
  moduleId: number
}

export interface Approve {
  userId: number,
  serialNo: number
}

export interface ReceiveAtDepartmentGo {
  selectedOption: number;
  receivedFrom: string;
  receivedTo: string;
  toSelectedId: number;
  fromSelectedId?: number;
  filterDate?: string;
  filterQualityCode: string;
  filterColorCode: string;
  filterRecordNumber?: number;
  fromLocationCode?: number;
  toLocationCode?: number;
}

export interface ReceiveAtDepartmentSave {
  header?: {
    selectedOption?: number
    receivedDate?: string;
    receivedFrom?: number;
    receivedTo?: number;
    loggedInUser?: number;
    receivedAt?: number;
  }
  rolls?: Array<ReceiveAtDepartment>;
}

export interface ReceiveAtWareHouseDepartmentSave {

  selectedOption?: number
  receivedDate?: string;
  receivedFrom?: number;
  receivedTo?: number;
  loggedInUser?: number;
  rackId?: any,
  toSelectedId: number,
  fromSelectedId: number,
  receivedAt?: number;
  rolls?: Array<ReceiveAtDepartment>;
}

export interface ReceiveAtDepartment {
  id?: number
  rollNo?: string;
  weighmentDate?: string;
  qualityCode?: string;
  colorCode?: string;
  netWeight?: number;
  sirNo?: string;
  gpNo?: string;
  osNo?: number;
  patternCode?: string;
}

export interface CentralCuttingUser {
  userId: string;
  userName: string;
  groupNo?: number;
  locationCode?: string;
  departmentCode?: string;
  stCode?: number;
  createdBy?: number;
  createdOn?: string;
  fullRights?: boolean;
  active?: boolean;
  userApprovalRights: boolean;
  requisitionApproval?: boolean;
  pwdChangeDate?: string;
  disableForDays?: number;
  locked?: boolean;
  lastLoginDate?: string;
  fromDisableDate?: string;
  toDisableDate?: string;
  showUnitPrice?: boolean;
  operationType?: number;
  id: number;
  label?: string;
  value?: number;
}
export interface TareWeight {

  locationCode?: string;
  createdBy?: string;
  code?: string;
  description?: string;
  weight?: number;
  active?: boolean;
  reWeighmentDays?: number;
  remarks?: string;
  createdOn?: string;
  operationType?: number;
  id: string;

  label?: string;
  value?: string;

}
export interface ReportsViewInterface {
  reportServer: string;
  reportUrl: string;
  showParameters: string;
  language: string;
  width: number;
  height: number;
  toolbar: string;
}

export interface UserLocation {
  userNo: number;
  locationName?: string;
  isAssigned?: boolean;
  operationType?: number;
  id: number;
  label?: string;
  value?: number;
}

export interface Parameter {
  IssuanceNo: number;
  IssuanceFromTo: string;
}

export interface PrintIssuanceWHtoWHReports extends ReportsViewInterface {
  parameters: Parameter
}

export interface UnSavedRollPrintParameter {
  guid: string;
}


export interface PrintUnSavedRollReports extends ReportsViewInterface {
  parameters: UnSavedRollPrintParameter
}
