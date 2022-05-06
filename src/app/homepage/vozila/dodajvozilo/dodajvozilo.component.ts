import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BazaService} from "../../../services/baza.service";

@Component({
  selector: 'app-dodajvozilo',
  templateUrl: './dodajvozilo.component.html',
  styleUrls: ['./dodajvozilo.component.css']
})
export class DodajvoziloComponent implements OnInit {
  @Output() prikazan: EventEmitter<boolean> = new EventEmitter()

  constructor(private baza: BazaService) { }

  ngOnInit(): void {
  }
  public submitVozilo(dodajVoziloForma: NgForm){
    if (!dodajVoziloForma.valid){
      return;
    }
    else {
      this.baza.dodajVozilo(dodajVoziloForma);
      dodajVoziloForma.reset();
    }
  }
  public sakrijDodavanjeVozila(){
    this.prikazan.emit(false);
  }
}
