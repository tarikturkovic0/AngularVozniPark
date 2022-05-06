import {Component, Input, OnInit} from '@angular/core';
import {getDatabase, ref} from "firebase/database";
import {get, remove} from "@angular/fire/database";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit {
  @Input() filteri: NgForm;
  list : any;
  kljucevi: any;
  prikaziLoading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.vratiVozila();
  }
  public async vratiVozila() {
    const db = getDatabase();
    this.prikaziLoading = true;
    const snapshot = await get(ref(db, 'vozila'));
    let privremeni = snapshot.val();
    //ovdje sa imao problem s tim sto bi se vrijednosti vracale ili kao Promise ili kao objekat, te sam odlucio da
    //objekat razlozim u listu. zbog toga sam dobio drugi problem, gdje sam morao kljuceve cuvati u odvojenoj listi
    //zbog brisanja
    this.kljucevi = Object.keys(privremeni);
    this.list = Object.keys(privremeni).map(index => {
      return privremeni[index];
    });
    this.prikaziLoading = false;
    return snapshot.val();
  }
  public filtriraj(f: NgForm){
    console.log(f.value);
  }
  public uradiNesto(f: NgForm){
    let db = getDatabase();
    if(f.value.akcija == 'Obrisi'){
      let zaObrisati = Object.keys(f.value).map(index => {
        return f.value[index];
      });
      for(let i = 0; i<this.kljucevi.length; i++) {
        if (zaObrisati[i + 1] == true) {
          remove(ref(db, 'vozila/' + this.kljucevi[i]));
        }
        window.location.reload();
      }
    }
    else{
      alert("Odaberite akciju");
    }
  }
}

