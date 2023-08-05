import { Component } from '@angular/core';
import { GetService } from './service/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pechgroot';
  weather?: any[];

  constructor(private getService: GetService){}

  ngOnInit(){
    this.getService.getWether().subscribe((data: any[]) => {
      console.log(data);
      this.weather = data;
    });
  }
}
