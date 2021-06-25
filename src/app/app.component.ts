import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo02';

  constructor(private router: Router) {
  }

  Listar() {
    this.router.navigate(["listar"]);
  }
  Nuevo() {
    this.router.navigate(["add"]);
  }
  Edit() {
    this.router.navigate(["edit"]);
  }
  DefaultAngular() {
    this.router.navigate(["defaultAngular"]);
  }
}
