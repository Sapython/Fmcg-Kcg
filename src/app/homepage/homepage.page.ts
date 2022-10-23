import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { Chart, registerables } from 'chart.js';
import { DataBaseService } from 'src/services/dataBase/data-base.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  public sales:any[]=[];
  public dailySales:any[]=[]
  loading:boolean = true;  

  barChart: any;
  doughnutChart: Chart;
  lineChart: Chart;

  constructor(public dataProvider: DataProviderService, public dataBase:DataBaseService) { 
    // Chart.register(...registerables);
  }

  ngOnInit() {
    this.getDailySales() 
    this.salesHistory()
    const ctx = document.getElementById('myChart')as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  public salesHistory() {
    return this.dataBase.sales(this.dataProvider.user["userId"]).then((res) => {
      res.forEach((element: any) => {
        this.sales.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.sales);
    }).finally(() => {this.loading=false});
  }


  public getDailySales() {
    return this.dataBase.getDailySales().then((res) => {
      res.forEach((element: any) => {
        this.dailySales.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.dailySales);
    }).finally(() => {this.loading=false});
  }






  ngAfterViewInit() {
    // this.barChartMethod();

  }


  ionViewWillEnter(){
    // this.barChartMethod()
  }


  barChartMethod() {
    
  }
}
