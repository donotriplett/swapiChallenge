import { Component, OnInit, Input } from '@angular/core';
import { FetchSWAPIService } from "../services/fetch-swapi.service"

@Component({
  selector: 'app-display-swapi',
  templateUrl: './display-swapi.component.html',
  styleUrls: ['./display-swapi.component.css']
})
export class DisplaySWAPIComponent implements OnInit {
  private _results: any;
  private _type: string;

  @Input()
  set swapi(res: any, ) {
    this._results = res.results[0];
    this._type = res.type;
  }

  
  get swapi(): any {
    return (this._results, this._type)
  }

  constructor() { }

  ngOnInit() {
    console.log(this._results, this._type)
  }


}
