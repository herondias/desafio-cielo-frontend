import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appMessage: ToastService) { }

  ngOnInit(): void {

  }

}
