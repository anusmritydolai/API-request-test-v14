import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-toggle-appearance-example',
  templateUrl: 'button-toggle-appearance-example.html',
  styleUrls: ['button-toggle-appearance-example.css'],
})
export class ButtonToggleAppearanceExample {
  data: any;
  err: any;
  constructor(private httpClient: HttpClient) {
    this.capexrecommendations("site-lcc-oxford-circus-65297")
    .subscribe((data: any) => this.data = data, (err: any) => this.err = err, ()=>console.log("API Called"))
  }

  public capexrecommendations(slug: any): Observable<any> {
    return this.httpClient.get(
      'https://prodv2api.oak-alerts.com/capex_recommendations?site_id=' + slug,
      {
        headers: {
          Authorization: `Bearer ${'204c1fedc145447c8142861c4f8597ce'}`,
        },
      }
    );
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */