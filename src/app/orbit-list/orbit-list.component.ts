import { Component, OnInit, Input} from '@angular/core';
import { Satellite} from '../satellite';



@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
})



export class OrbitListComponent implements OnInit {

  @Input() satellites!: Satellite[]
  
  constructor() {
  }
  ngOnInit(): void {
    
  }

  sorted = false;

  sort(column: String): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.sorted = !this.sorted;
    if(this.sorted){
      this.satellites.sort(function(a: Satellite, b: Satellite): number {
        // @ts-ignore
        if(a[column] < b[column]) {
          return -1;
        } else {
          // @ts-ignore
          if (a[column] > b[column]) {
            return 1;
          }
        }
        return 0;
      });
    }else{
      this.satellites.sort(function(a: Satellite, b: Satellite): number {
        // @ts-ignore
        if(a[column] < b[column]) {
          return 1;
        } else {
          // @ts-ignore
          if (a[column] > b[column]) {
            return -1;
          }
        }
        return 0;
      });
    }
  }
}
  