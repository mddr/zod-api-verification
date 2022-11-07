import { Controller, Get } from '@nestjs/common';

import { Message } from '@zod-api-verification/api-interfaces';

import { AppService } from './app.service';

interface ExampleApiResponseValid {
  foo: number;
  bar: { baz: string; id: string }[];
  anotherKey: string;
}

interface ExampleApiResponseInvalid {
  differentFoo: number;
  bar: { baz: string; id: string }[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('example/valid')
  exampleValid(): ExampleApiResponseValid {
    return {
      foo: 21,
      bar: [
        { baz: 'abc', id: 'id1' },
        { baz: 'def', id: 'id2' },
      ],
      anotherKey: 'aaa',
    };
  }

  @Get('example/invalid')
  exampleInvalid(): ExampleApiResponseInvalid {
    return {
      differentFoo: 21,
      bar: [
        { baz: 'abc', id: 'id1' },
        { baz: 'def', id: 'id2' },
      ],
    };
  }
}
