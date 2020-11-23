import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User, UserToCreate } from './_interfaces';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  public isCreate: boolean;
  public name: string;
  public address: string;
  public user: UserToCreate;
  public users: User[] = [];
  public response: {dbPath: ''};

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.isCreate = true;
  }

  public onCreate = () => {
    this.user = {
      name: this.name,
      address: this.address,
      imgPath: this.response.dbPath
    }

    this.http.post('https://localhost:4000/api/images', this.user)
    .subscribe(res => {
      this.getUsers();
      this.isCreate = false;
    });
  }

  private getUsers = () => {
    this.http.get('https://localhost:4000/api/images')
    .subscribe(res => {
      this.users = res as User[];
    });
  }

  public returnToCreate = () => {
    this.isCreate = true;
    this.name = '';
    this.address = '';
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:4000/${serverPath}`;
  }
}
