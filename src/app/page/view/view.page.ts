import { Component, OnInit } from '@angular/core';

// Importa dependências
import { ActivatedRoute } from '@angular/router';
import {
 AngularFirestore,
 AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-view',
 templateUrl: './view.page.html',
 styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

 public id: string;
 item: Observable<any>;

 constructor(
   // Injeção de dependências
   public activatedRoute: ActivatedRoute,
   private afs: AngularFirestore
 ) { }

 ngOnInit() {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
   this.item = this.afs.doc<any>(`articles/${this.id}`).valueChanges();
 }
}
