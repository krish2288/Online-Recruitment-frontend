import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';
import { College } from '../college.model'; // Ensure you have a College model

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
})
export class CollegeComponent {
  collegeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private collegeService: CollegeService
  ) {
    this.createForm();
  }

  createForm() {
    this.collegeForm = this.fb.group({
      college_id: ['', Validators.required],
      college_name: ['', [Validators.required, Validators.minLength(3)]],
      college_description: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
      college_address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.collegeForm.valid) {
      const collegeData: College = {
        collegeId: this.collegeForm.value.college_id,
        collegeName: this.collegeForm.value.college_name,
        collegeAddress: this.collegeForm.value.college_address,
        collegeDescp: this.collegeForm.value.college_description,
      };

      this.collegeService.addCollege(collegeData).subscribe(
        (response) => {
          console.log('College added:', response);
          alert('Successfully Added College Details');
          this.redirectToJobsList();
        },
        (error) => {
          console.error('Error adding college:', error);
        }
      );
    }
  }

  redirectToJobsList() {
    this.router.navigate(['/job-list']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
