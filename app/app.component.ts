import { Component } from '@angular/core';
import { Myent, Mychildren, Myparent } from './myent';
import { GridOptions } from "ag-grid/main";
import moment from "moment";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  gridOptions: GridOptions;

  parents: Myparent[] = [
    {id: 1, name: 'p1'},
    {id: 2, name: 'p2'},
    {id: 3, name: 'p3'},
    {id: 4, name: 'p4'},
  ]

  getParentById(id: number): Myparent{
    return this.parents[this.parents.findIndex(parent => parent.id === id)];
  }

  rowData: Myent[] = [
    { id: 1, name: 'n1', birth: new Date('1988-01-01'), deliveryTime: '19:00', income: 21931.32, children: [1, 2, 3], parent: 1 },
    { id: 2, name: 'n2', birth: new Date('1988-01-02'), deliveryTime: '19:15', income: 31931.32, children: [3, 4, 5], parent: 1 },
    { id: 3, name: 'n3', birth: new Date('1988-01-03'), deliveryTime: '05:00', income: 11931.32, children: [5, 7, 8], parent: 2 },
    { id: 4, name: 'n4', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 3 },
    { id: 5, name: 'n5', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 4 },
     { id: 1, name: 'n1', birth: new Date('1988-01-01'), deliveryTime: '19:00', income: 21931.32, children: [1, 2, 3], parent: 1 },
    { id: 2, name: 'n2', birth: new Date('1988-01-02'), deliveryTime: '19:15', income: 31931.32, children: [3, 4, 5], parent: 1 },
    { id: 3, name: 'n3', birth: new Date('1988-01-03'), deliveryTime: '05:00', income: 11931.32, children: [5, 7, 8], parent: 2 },
    { id: 4, name: 'n4', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 3 },
    { id: 5, name: 'n5', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 4 },
     { id: 1, name: 'n1', birth: new Date('1988-01-01'), deliveryTime: '19:00', income: 21931.32, children: [1, 2, 3], parent: 1 },
    { id: 2, name: 'n2', birth: new Date('1988-01-02'), deliveryTime: '19:15', income: 31931.32, children: [3, 4, 5], parent: 1 },
    { id: 3, name: 'n3', birth: new Date('1988-01-03'), deliveryTime: '05:00', income: 11931.32, children: [5, 7, 8], parent: 2 },
    { id: 4, name: 'n4', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 3 },
    { id: 5, name: 'n5', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 4 },
     { id: 1, name: 'n1', birth: new Date('1988-01-01'), deliveryTime: '19:00', income: 21931.32, children: [1, 2, 3], parent: 1 },
    { id: 2, name: 'n2', birth: new Date('1988-01-02'), deliveryTime: '19:15', income: 31931.32, children: [3, 4, 5], parent: 1 },
    { id: 3, name: 'n3', birth: new Date('1988-01-03'), deliveryTime: '05:00', income: 11931.32, children: [5, 7, 8], parent: 2 },
    { id: 4, name: 'n4', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 3 },
    { id: 5, name: 'n5', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 4 },
     { id: 1, name: 'n1', birth: new Date('1988-01-01'), deliveryTime: '19:00', income: 21931.32, children: [1, 2, 3], parent: 1 },
    { id: 2, name: 'n2', birth: new Date('1988-01-02'), deliveryTime: '19:15', income: 31931.32, children: [3, 4, 5], parent: 1 },
    { id: 3, name: 'n3', birth: new Date('1988-01-03'), deliveryTime: '05:00', income: 11931.32, children: [5, 7, 8], parent: 2 },
    { id: 4, name: 'n4', birth: new Date('1988-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 3 },
    { id: 5, name: 'n5', birth: new Date('1989-01-04'), deliveryTime: '16:00', income: 1931.32, children: [1, 2, 6], parent: 4 }
  ];

  columnDefs: any[] = [
    { headerName: 'ID', field: 'id', width: 50, type: 'numericColumn' },
    { headerName: 'Name', field: 'name', width: 100 },
    { headerName: 'Birth', field: 'birth', width: 100, type: 'dateColumn' },
    { headerName: 'Preferred Delivery Time', field: 'deliveryTime', type: 'timeColumn', width: 100 },
    { headerName: 'Income', field: 'income', width: 100, type: 'numericColumn' },
    { headerName: 'Parent', field: 'parent', width: 100, type: 'parentColumn' },
  ];

  ngOnInit() {
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      defaultColDef: { editable: true },
      enableColResize: true,
      enableFilter: true,
      columnTypes: {
        numberColumn: {
          width: 83,
          filter: "agNumberColumnFilter"
        },
        nonEditableColumn: { editable: false },
        dateColumn: {
          filter: "agDateColumnFilter",
          valueFormatter: (prop) => moment(prop.value).format("DD-MM-YYYY")
        },
        timeColumn: {
          filter: "agDateColumnFilter",
          valueFormatter: (prop) => moment(prop.value, "HH:mm").format("HH:mm")
        },
        parentColumn: {
          valueFormatter: (prop) => {const p: Myparent = this.getParentById(prop.value); return p.name; }
        }
      }
    }
  }
}
