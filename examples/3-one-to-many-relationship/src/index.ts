import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { Container } from 'typedi';

dotenv.config();

import { Server } from '../../../src/';

async function bootstrap() {
  const server = new Server({
    container: Container,
    warthogImportPath: '../../../src' // Path written in generated classes
  });

  await server.start();
}

bootstrap().catch((error: Error) => {
  console.error(error);
  if (error.stack) {
    console.error(error.stack!.split('\n'));
  }
  process.exit(1);
});
