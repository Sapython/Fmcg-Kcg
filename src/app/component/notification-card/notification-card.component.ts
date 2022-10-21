import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() name: String = 'Your password has been Successfully Changed';
  @Input() date: String = 'Jul 23, 2022 ';
  constructor() { }

  ngOnInit() {}

}
