import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { z } from 'zod';
import { parseApiResponse, verifyResponseType } from './zod-verify';

interface ExampleApiResponse {
  foo: number;
  bar: { baz: string; id: string }[];
}

const ZodApiResponse = z.object({
  foo: z.number(),
  bar: z.array(
    z.object({
      baz: z.string(),
      id: z.string(),
    })
  ),
});
type ZodApiResponse = z.infer<typeof ZodApiResponse>;

@Injectable({
  providedIn: 'root',
})
export class ZodHttpService {
  private readonly http = inject(HttpClient);

  fetchData(): Observable<ZodApiResponse> {
    return this.http
      .get('/api/example/valid')
      // .pipe(map((response) => parseApiResponse(response, ZodApiResponse)));
      .pipe(verifyResponseType(ZodApiResponse));
  }
}
