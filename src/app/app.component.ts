import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment_4';
  // empo: { name: string, sname: string, city: string }[]=[];
  flag = true;
  empName = '';
  cityName = '';

  employees = [
    {
      id:'02',
      name: 'Thanu',
      sname: 'Allu',
      city: 'Vijayawada'
    },
    {
      id:'04',
      name: 'Deepu',
      sname: 'Bandaru',
      city: 'Vizag'
    },
    {
      id:'20',
      name: 'Dhanu',
      sname: 'Gudivaka',
      city: 'Rajamundry'
    },
    {
      id:'26',
      name: 'Hemanth',
      sname: 'Karumanchi',
      city: 'Guntur'
    },
    {
      id:'28',
      name: 'Prabhu',
      sname: 'Kondru',
      city: 'Tanuku'
    },
    {
      id:'29',
      name:'Kalyan',
      sname: 'Kotala',
      city: 'Vizag'
    },
    {
      id:'41',
      name: 'Ram',
      sname: 'Muppana',
      city: 'Vizag'
    },
    {
      id:'42',
      name: 'Anvi',
      sname: 'Nadimpalli',
      city: 'Kakinada'
    },
    {
      id:'44',
      name: 'Akhi',
      sname: 'Namala',
      city: 'Vijayawada'
    },
    {
      id:'52',
      name: 'Vaishu',
      sname: 'Pula',
      city: 'Vijayawada'
    },
    {
      id:'59',
      name: 'Mahi',
      sname: 'Tirupati',
      city: 'Gokavaram'
    }  
  ]

  cities = new Set(this.employees.map(c => (c.city)))
  empo = this.employees

  constructor() {}

  onEmp(val: string) {
    this.empName = val
    this.empo = this.employees.map(e => (e)).filter(f => (f.name == val))
    this.flag = true
  }

  onCity(val: string) {
    this.cityName = val
    this.empo = this.employees.map(e => (e)).filter(f => (f.city == val))
    this.flag = false
  }

  someFun(){
    console.log("hello")
  }
}
