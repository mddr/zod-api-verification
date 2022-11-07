import { ZodHttpService } from './zod-http.service';
import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'zod-api-verification-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
})
export class AppComponent {
  private readonly apiService = inject(ZodHttpService);

  exampleData$ = this.apiService.fetchData();
}
