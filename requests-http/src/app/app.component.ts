import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'requests-http';

  items!: MenuItem[];

  ngOnInit(): void {
    this.items =[{
      label: 'Http',
      icon: 'pi pi-fw pi-file',
      items:[{
        
          label: 'Home',
          icon: 'pi pi-fw pi-bookmark',
          routerLink:['']
      },
      {
          label: 'Cursos',
          icon: 'pi pi-fw pi-video',
          routerLink: ['/cursos']
      }
      ]
    }]
  }
}
