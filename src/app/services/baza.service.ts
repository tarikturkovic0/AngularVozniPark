import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BazaService {

  constructor(private httpClient : HttpClient) { }

  public dodajVozilo(forma : NgForm) {
    this.httpClient.post("https://angularprojekat-d8733-default-rtdb.europe-west1.firebasedatabase.app/vozila.json", forma.value)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      }
    );
  }

}
