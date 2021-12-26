import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translation-demo';
  language = 'fr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  changeLanguage(): void {
    if(this.language === 'fr') {
    this.language = 'en';
    } else {
      this.language = 'fr';
    }
    this.translate.use(this.language)
  }

}
