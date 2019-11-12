import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { FetchSWAPIService } from "../services/fetch-swapi.service"

@Component({
  selector: 'app-display-swapi',
  templateUrl: './display-swapi.component.html',
  styleUrls: ['./display-swapi.component.css']
})
export class DisplaySWAPIComponent implements OnInit {
  searchSWAPI: FormGroup;
  results: any;

  constructor(private _fb: FormBuilder ,private _dbService: FetchSWAPIService) { }

  ngOnInit() {
    this.searchSWAPI = this._fb.group({
      value: new FormControl(),
      search: new FormControl()
    })
  }

  onSubmit(): void {
    this._dbService.fetchStarWars(this.searchSWAPI.value.search, this.searchSWAPI.value.value).subscribe(res => console.log(res))
  }

}
