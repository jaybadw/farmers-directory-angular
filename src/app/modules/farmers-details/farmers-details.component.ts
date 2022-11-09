import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerDetailsService } from 'src/app/services/farmer-details.service';
import { farmerDetails } from 'src/app/models/farmerDetails';

@Component({
  selector: 'app-farmers-details',
  templateUrl: './farmers-details.component.html',
  styleUrls: ['./farmers-details.component.scss']
})
export class FarmersDetailsComponent implements OnInit {

  constructor(private FarmerDetalsService: FarmerDetailsService, private Router: Router, private route:ActivatedRoute) { }

  getFarmer!: farmerDetails
  waiting:boolean = true
  arraySearch = 0
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    console.log(id)
    this.getFarmerById(id)
  }

  getFarmerById( id: string){
    this.FarmerDetalsService.getFarmerById(id).subscribe(farmer=>{
      this.getFarmer = farmer.data;
      this.waiting = false
      console.log(farmer)
    })
  }
}
