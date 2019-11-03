import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { Router } from '@angular/router';
import { AriaDescriber } from '@angular/cdk/a11y';

export interface master {
  name: string;
  type: string;
}

export interface slave {
  name: string;
  type: number;
}

const ELEMENT_DATA: master[] = [
  {name: 'Dolphins',type: 'Sea'},
  {name: 'Jellyfish',type: 'Sea'},
  {name: 'Lobsters',type: 'Sea'},
  {name: 'Seahorses',type: 'Sea'},
  {name: 'Seals',type: 'Sea'},
  {name: 'Whales',type: 'Sea'},
  {name: 'Angler Fish',type: 'Sea'},
  {name: 'Hammer Head Shark',type: 'Sea'},
  {name: 'Blue Whale',type: 'Sea'},
  {name: 'Caribbean Roughshark',type: 'Sea'},
  {name: 'Buffalo',type: 'Land'},
  {name: 'Giraffe',type: 'Land'},
  {name: 'Bison',type: 'Land'},
  {name: 'Black Bear',type: 'Land'},
  {name: 'Rhinoceros',type: 'Land'},
  {name: 'Anteater',type: 'Land'},
  {name: 'Elephant',type: 'Land'},
  {name: 'Cow',type: 'Land'},
  {name: 'Goat',type: 'Land'},
  {name: 'Hyena',type: 'Land'},
  {name: 'Crow',type: 'Air'},
  {name: 'Peacock',type: 'Air'},
  {name: 'Dove',type: 'Air'},
  {name: 'Sparrow',type: 'Air'},
  {name: 'Goose',type: 'Air'},
  {name: 'Ostrich',type: 'Air'},
  {name: 'Pigeon',type: 'Air'},
  {name: 'Owl',type: 'Air'},
  {name: 'Hawk',type: 'Air'},
  {name: 'Parrot',type: 'Air'},
  {name: 'Flamingo',type: 'Air'},
];

var TABLE_DATA: master[] = [
  {name: 'Dolphins',type: ''},
  {name: 'Jellyfish',type: ''},
  {name: 'Lobsters',type: ''},
  {name: 'Seahorses',type: ''},
  {name: 'Seals',type: ''},
  {name: 'Whales',type: ''},
  {name: 'Angler Fish',type: ''},
  {name: 'Hammer Head Shark',type: ''},
  {name: 'Blue Whale',type: ''},
  {name: 'Caribbean Roughshark',type: ''},
  {name: 'Buffalo',type: ''},
  {name: 'Giraffe',type: ''},
  {name: 'Bison',type: ''},
  {name: 'Black Bear',type: ''},
  {name: 'Rhinoceros',type: ''},
  {name: 'Anteater',type: ''},
  {name: 'Elephant',type: ''},
  {name: 'Cow',type: ''},
  {name: 'Goat',type: ''},
  {name: 'Hyena',type: ''},
  {name: 'Crow',type: ''},
  {name: 'Peacock',type: ''},
  {name: 'Dove',type: ''},
  {name: 'Sparrow',type: ''},
  {name: 'Goose',type: ''},
  {name: 'Ostrich',type: ''},
  {name: 'Pigeon',type: ''},
  {name: 'Owl',type: ''},
  {name: 'Hawk',type: ''},
  {name: 'Parrot',type: ''},
  {name: 'Flamingo',type: ''},
];

var AIR_DATA: master[] = []
var LAND_DATA: master[] = []


@Component({
  selector: 'app-multiple-mat-table-task',
  templateUrl: './multiple-mat-table-task.component.html',
  styleUrls: ['./multiple-mat-table-task.component.scss']
})
export class MultipleMatTableTaskComponent implements OnInit {

  types: any[] = ['Sea','Land','Air']

  @ViewChild('mtable') mtable: MatTable<master>;
  @ViewChild('ltable') ltable: MatTable<master>;
  @ViewChild('atable') atable: MatTable<master>;

  displayedColumns1: string[] = ['name', 'type','action'];
  dataSource1 = TABLE_DATA;
  displayedColumns2: string[] = ['name', 'type'];
  dataSource2 = LAND_DATA
  displayedColumns3: string[] = ['name', 'type'];
  dataSource3 = AIR_DATA
  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextTask(){
    this.router.navigate(['customDirective'])
  }

  inputChanged(value: any, element: master){

    const newData = TABLE_DATA.map(el => {
     if(el.name === element.name){
       el.type = value
     }
     return el
    });
    TABLE_DATA = newData;
  }

  moveElement(element:master){ 
    if(element.type === "" || undefined){
      alert("Please select a type")
      return;
    }

    var selected = TABLE_DATA.find(el => el.name === element.name)
    var actualType = ELEMENT_DATA.find(el => el.name === element.name).type
    
    if(selected.type !== actualType){
      alert('This is not the correct type. Please try again')
      return;
    }

    if(selected.type === "Air"){
      // var temp = AIR_DATA
      AIR_DATA.push(selected)
      this.dataSource3 = AIR_DATA
    }
    else if (selected.type === "Land"){
      // var temp = this.dataSource2
      LAND_DATA.push(selected)
      this.dataSource2 = LAND_DATA
    }
    
    var newData = TABLE_DATA.filter((el) => el.name !== element.name);
    TABLE_DATA = newData 
    this.mtable.dataSource = TABLE_DATA

    this.atable.renderRows()
    this.ltable.renderRows()
    this.mtable.renderRows() 
    
  }


}
