import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './services/user-manager.service';

//models
import { IUser, IUserResponse } from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  picture: string;
  constructor(private userManagerService: UserManagerService) {}

  ngOnInit(): void {
    this.getRandomUser();
  }

  handleclick() {
    this.getRandomUser();
  }

  getRandomUser() {
    this.userManagerService
      .getRandomName()
      .subscribe((response: IUserResponse) => {
        const { results } = response;
        const [data] = results;
        const { name, email, phone, picture }: IUser = data;
        this.name = `${name.first} ${name.last}`;
        this.email = email;
        this.phone = phone;
        this.picture = picture.large;
      });
  }
}
