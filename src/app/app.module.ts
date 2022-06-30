import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GuestModule} from "./component/guest/guest.module";
import {ProfileModule} from "./component/profile/profile.module";
import {SharedModule} from "./component/shared/shared.module";
import {WalletModule} from "./component/wallet/wallet.module";
import {SecurityModule} from "./component/security/security.module";
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {ChatboxModule} from "./component/chatbox/chatbox.module";
import {CommentModule} from "./component/comment/comment.module";
import {FriendModule} from "./component/friend/friend.module";
import {GuestFriendModule} from "./component/guest-friend/guest-friend.module";
import {HomepageModule} from "./component/homepage/homepage.module";
import {PostModule} from "./component/post/post.module";
import {ReportModule} from "./component/report/report.module";
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
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
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
