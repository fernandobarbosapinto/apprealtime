import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: any;

  constructor(db: AngularFireDatabase) {
    db.list('pessoas').valueChanges().subscribe(result => {
      this.pessoas = result;
      console.log(this.pessoas);
    })
   }

  ngOnInit() { }

}
