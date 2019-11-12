import { Component, OnInit, Input } from '@angular/core';
import { FetchSWAPIService } from "../services/fetch-swapi.service"

@Component({
  selector: 'app-display-swapi',
  templateUrl: './display-swapi.component.html',
  styleUrls: ['./display-swapi.component.css']
})
export class DisplaySWAPIComponent implements OnInit {
  private _results: any;

  @Input()
  set swapi(res: any) {
    this._results = res
  }
  
  get swapi(): any {
    return this._results
  }

  constructor() { }

  ngOnInit() {
  }


}
