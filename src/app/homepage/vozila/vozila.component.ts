import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TabelaComponent} from "./tabela/tabela.component";

@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.css']
})

export class VozilaComponent implements OnInit {
  @ViewChild(TabelaComponent) child:TabelaComponent;
  filteri: NgForm;
  dugmeVoziloKliknuto = false;
  dugmeFilteriKliknuto = false;
  constructor() {}
  ngOnInit(): void {
  }
  public prikaziDodavanjeVozila(){
    this.dugmeVoziloKliknuto = !this.dugmeVoziloKliknuto;
  }
  public sakrijDodavanjeVozila(b: boolean){
    this.dugmeVoziloKliknuto = !this.dugmeVoziloKliknuto;
  }
  public prikaziFiltere(){
    this.dugmeFilteriKliknuto = !this.dugmeFilteriKliknuto;
  }

  //nedovrsen dio, za sada samo salje podatke forme za filtriranje u Tabela komponentu, tu bih podatke iz glavne liste
  //kopirao u drugu listu, te bih ih tu filtrirao kroz map funkciju. jedini razlog zasto to nisam uradio je sto
  //bih tako pokvario funkciju brisanja iz tabele, jer kljuceve od elemenata sam morao cuvati u drugoj listi.
  public filtriraj(forma: NgForm){
    this.child.filtriraj(forma);
  }
}
