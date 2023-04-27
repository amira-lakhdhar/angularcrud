import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/app/Shared/Services/lazy-load-script.service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadScriptService) { }

  ngOnInit(): void {

  }

}
