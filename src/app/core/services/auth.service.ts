import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public storage = null;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController
  ) {
    this.init();
  }

  init(): void {
    this.storage = localStorage;
  }

  public checkKey(key: string): Observable<any> {
    this.storage.setItem('eliteLicenseKey', key);
    const body = { key };

    return this.http.post(
      'http://localhost:8080/api/check',
      body
    );
  }

  public async reauthenticate(): Promise<void> {
    const key = this.storage.getItem('eliteLicenseKey');

    if (!key) {
      throw new Error('No key found');
    }

    this.checkKey(key).subscribe((res) => {
      if (!res) {
        throw new Error('Invalid key');
      }
    });
  }

  async logout(): Promise<boolean> {
    this.storage.removeItem('eliteLicenseKey');
    return this.navCtrl.navigateRoot('/login');
  }
}
