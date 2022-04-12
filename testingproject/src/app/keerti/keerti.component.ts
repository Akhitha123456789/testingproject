import { Component, OnInit } from '@angular/core';
import { ChinmayService } from '../chinmay.service';

@Component({
  selector: 'app-keerti',
  templateUrl: './keerti.component.html',
  styleUrls: ['./keerti.component.css']
})
export class KeertiComponent implements OnInit {
mor;
  constructor(private anki:ChinmayService) { }

  ngOnInit(): void {
    this.mor=this.anki.empData
  }

}
