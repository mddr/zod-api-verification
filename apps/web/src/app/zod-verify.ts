import { map, pipe } from 'rxjs';
import { z } from 'zod';

export function parseApiResponse<T extends z.ZodTypeAny>(
  response: unknown,
  zodObject: T
): T {
  return zodObject.parse(response);
}

export function verifyResponseType<T extends z.ZodTypeAny>(zodObject: T) {
  return pipe(map((response) => zodObject.parse(response)));
}
