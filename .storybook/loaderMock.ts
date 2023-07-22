import type { Loader } from '@storybook/react';
import { contextSetup } from '@amnis/state/context';
import { schemaState } from '@amnis/state/schema';
import { schemaAuth } from '@amnis/api/schema';
import { processAuth, processCrud, processSys } from '@amnis/api/process';
import { mockService } from '@amnis/mock';

let started = false;

export const loaderMock: Loader = async () => {
  if (started) {
    return {};
  }
  
  const context =  await contextSetup({
    schemas: [schemaState, schemaAuth],
  });

  await mockService.setup({
    hostname: 'http://localhost:6006',
    baseUrl: '/api',
    context,
    processes: {
      auth: processAuth,
      crud: processCrud,
      sys: processSys,
    },
    debug: true,
  });

  await mockService.start({
    onUnhandledRequest: 'bypass',
  });

  started = true;

  return {};
}

export default loaderMock;