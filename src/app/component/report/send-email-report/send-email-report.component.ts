import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email-report',
  templateUrl: './send-email-report.component.html',
  styleUrls: ['./send-email-report.component.css']
})
export class SendEmailReportComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {
  }

  // mail :Email = new Email();
  //
  // constructor(private http: HttpClient, private emailService :EmailService) { }
  //
  // private enviarEmail() {
  //   this.emailService.enviarEmail(this.mail)
  //     .subscribe(data => console.log(data));
  // }
  //
  // private onSubmit() {
  //   this.enviarEmail();
  // }

}
