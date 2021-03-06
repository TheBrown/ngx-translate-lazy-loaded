import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { createTranslateLoader } from "../../app/app.module";
import { HomePage } from "./home";

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomePageModule {}
