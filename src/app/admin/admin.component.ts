import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['emp-dashboard'], { relativeTo: this.route });
    } else if (index === 1) {
      this.router.navigate(['jobseeker-dashboard'], { relativeTo: this.route });
    }
  }
}


