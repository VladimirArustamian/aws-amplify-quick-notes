// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, Document } = initSchema(schema);

export {
  Author,
  Document
};