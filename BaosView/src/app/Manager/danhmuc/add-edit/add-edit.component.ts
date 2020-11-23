import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, DanhmucService } from '@app/Manager/_services'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  form: FormGroup;
  idDanhMuc: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private danhMucService: DanhmucService,
    private alertService: AlertService
    ) {}

    ngOnInit() {
      this.idDanhMuc = this.route.snapshot.params['idDanhMuc'];
      this.isAddMode = !this.idDanhMuc;

      this.form = this.formBuilder.group({
        // firstName: ['', Validators.required],
        tenDanhMuc: ['', Validators.required],
      });

      if (!this.isAddMode) {
        this.danhMucService.getById(this.idDanhMuc)
        .pipe(first())
        .subscribe(x => {
          // this.f.firstName.setValue(x.firstName);
          this.f.tenDanhMuc.setValue(x.tenDanhMuc);
        });
      }
    }
    get f() { return this.form.controls; }

    // convenience getter for easy access to form fields

    onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
        return;
      }

      this.loading = true;
      if (this.isAddMode) {
        this.createDanhMuc();
      } else {
        this.updateDanhMuc();
      }
    }

    private createDanhMuc() {
      this.danhMucService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Thêm danh mục thành công', { keepAfterRouteChange: true });
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
      }

      private updateDanhMuc() {
        this.danhMucService.update(this.idDanhMuc, this.form.value)
        .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Sửa danh mục thành công', { keepAfterRouteChange: true });
            this.router.navigate(['..', { relativeTo: this.route }]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
        }
      }
