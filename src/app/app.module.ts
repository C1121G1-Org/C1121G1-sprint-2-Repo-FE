import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GuestModule} from "./component/guest/guest.module";
import {ProfileModule} from "./component/profile/profile.module";
import {SharedModule} from "./component/shared/shared.module";
import {WalletModule} from "./component/wallet/wallet.module";
import {SecurityModule} from "./component/security/security.module";
import {ChatboxModule} from "./component/chatbox/chatbox.module";
import {CommentModule} from "./component/comment/comment.module";
import {FriendModule} from "./component/friend/friend.module";
import {GuestFriendModule} from "./component/guest-friend/guest-friend.module";
import {HomepageModule} from "./component/homepage/homepage.module";
import {PostModule} from "./component/post/post.module";
import {ReportModule} from "./component/report/report.module";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {NgxPayPalModule} from "ngx-paypal";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./common/footer/footer.component";
import {HeaderComponent} from "./common/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MoneyChargeComponent} from "./component/wallet/money-charge/money-charge.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoneyChargeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ChatboxModule,
    CommentModule,
    FriendModule,
    GuestModule,
    GuestFriendModule,
    HomepageModule,
    PostModule,
    ProfileModule,
    ReportModule,
    SecurityModule,
    SharedModule,
    WalletModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgxPayPalModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
