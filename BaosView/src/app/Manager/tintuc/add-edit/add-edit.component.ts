import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, DanhmucService, TintucService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  idTinTuc: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  dmChung = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tinTucService: TintucService,
    private alertService: AlertService,
    private dmChungService: DanhmucService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.idTinTuc = this.route.snapshot.params['idTinTuc'];
    this.isAddMode = !this.idTinTuc;

    this.form = this.formBuilder.group({
      tenTinTuc: ['', Validators.required],
      ndTinTuc: ['', Validators.required],
      idDanhMuc: ['', Validators.required],
      ttTinTuc: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.tinTucService
        .getById(this.idTinTuc)
        .pipe(first())
        .subscribe((x) => {
          this.f.tenTinTuc.setValue(x.tenTinTuc);
          this.f.ndTinTuc.setValue(x.ndTinTuc);
          this.f.idDanhMuc.setValue(x.idDanhMuc);
          this.f.ttTinTuc.setValue(x.ttTinTuc);
        });
    }
    this.dmChungService.getAll()
          .pipe(first())
          .subscribe(dmChung => this.dmChung = dmChung);
  }
  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }

  // convenience getter for easy access to form fields

  // tslint:disable-next-line: typedef
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
      this.createTinTuc();
    } else {
      this.updateTinTuc();
    }

  }

  // tslint:disable-next-line: typedef
  private createTinTuc() {
    this.tinTucService
      .register(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success('Thêm tin tức thành công', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    console.log(this.form.value);
  }

  // tslint:disable-next-line: typedef
  private updateTinTuc() {
    this.tinTucService
      .update(this.idTinTuc, this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success('Sửa tin tức thành công', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['..', { relativeTo: this.route }]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
      console.log(this.form.value);
  }
}
