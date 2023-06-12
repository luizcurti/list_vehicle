import { config as configDotenv } from 'dotenv';
import { resolve } from 'path';

switch (process.env.ENV) {
  case 'LOCAL':
    console.log('[ENVIRONMENT] LOCAL');
    configDotenv({
      path: resolve(__dirname, '../../.env'),
    });
    break;
 
  case 'TEST':
    console.log('[ENVIRONMENT] TEST');
    configDotenv({
      path: resolve(__dirname, '../../.test.env'),
    });
  break;  
}
