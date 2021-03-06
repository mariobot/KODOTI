import { Component, OnInit } from '@angular/core';
import { ClientsCollection } from '../models/ClientsCollection';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {  

  public clients: ClientsCollection;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, Content-Type'
      })
    };
    //http://localhost:10000/clients?page=1&take=100'
    // check file proxy.conf.json
    this.http.get<ClientsCollection>('/clients?page=1&take=100').subscribe(result => (
      this.clients = result),
      error => console.log(error));
    console.log(this.clients);
  }
}
