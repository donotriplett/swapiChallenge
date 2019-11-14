import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { FetchSWAPIService } from "./services/fetch-swapi.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchSWAPI: FormGroup;
  props: any = [{results: null}, {type: null}]

  constructor(private _fb: FormBuilder ,private _dbService: FetchSWAPIService) {}

  ngOnInit() {
    this.searchSWAPI = this._fb.group({
      value: new FormControl(),
      search: new FormControl()
    })
  }

  onSubmit(): void {
    this._dbService.fetchStarWars(this.searchSWAPI.value.search, this.searchSWAPI.value.value).subscribe(res =>{this.props.type = this.searchSWAPI.value.search ; this.props.results = res.results})
  }

}
