import { Component, OnInit } from '@angular/core';
import {
  NavController,
  LoadingController
} from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public licenseKey = '';
  public loading: HTMLIonLoadingElement;

  constructor(
    private navCtrl: NavController,
    private authProvider: AuthService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async login() {
    const overlay = await this.loadingCtrl.create({
      message: 'Authenticating...'
    });

    this.loading = overlay;
    this.loading.present();

    this.authProvider.checkKey(this.licenseKey).subscribe(
      (res) => {
        this.loading.dismiss();
        this.navCtrl.navigateRoot('/home');
      },
      (err) => {
        this.loading.dismiss();
      }
    );
  }
}
