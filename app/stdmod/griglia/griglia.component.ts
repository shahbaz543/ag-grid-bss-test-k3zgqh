import { Component, OnInit } from '@angular/core';
import { CfgService } from '../cfg.service';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css']
})
export class GrigliaComponent implements OnInit {

  constructor(private cfg: CfgService) { }

  ngOnInit() {
    this.cfg.entity('tnazioni').subscribe(strentity => {
      console.log(strentity);
    })
  }

}