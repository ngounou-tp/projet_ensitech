import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
  
  constructor() { }

  ngOnInit() {
      // Pie Chart: Attendance Status (Présence des élèves)
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['75%', '20%', '5%'],
        series: [75, 20, 5]
      };
      this.emailChartLegendItems = [
        { title: 'Présents', imageClass: 'fa fa-circle text-success' },
        { title: 'Absents', imageClass: 'fa fa-circle text-danger' },
        { title: 'Excusés', imageClass: 'fa fa-circle text-warning' }
      ];

      // Line Chart: Weekly Average Grades (Notes Moyennes Hebdomadaires)
      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        series: [
          [85, 88, 90, 87, 85, 92], // Classe A
          [78, 80, 75, 83, 76, 85], // Classe B
          [92, 90, 95, 94, 93, 96]  // Classe C
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 100,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: true,
        showPoint: true,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Classe A', imageClass: 'fa fa-circle text-info' },
        { title: 'Classe B', imageClass: 'fa fa-circle text-danger' },
        { title: 'Classe C', imageClass: 'fa fa-circle text-warning' }
      ];

      // Bar Chart: Monthly Enrollment vs Graduates (Inscriptions et Diplômés Mensuels)
      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
        series: [
          [50, 60, 70, 80, 90, 100, 120, 130, 110, 100, 105, 115], // Inscriptions
          [5, 10, 15, 20, 25, 30, 35, 40, 38, 45, 50, 55]          // Diplômés
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Inscriptions', imageClass: 'fa fa-circle text-primary' },
        { title: 'Diplômés', imageClass: 'fa fa-circle text-success' }
      ];
    }
}
