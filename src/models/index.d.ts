import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Author {
  readonly id: string;
  readonly Documents?: (Document | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

export declare class Document {
  readonly id: string;
  readonly content?: string;
  readonly authorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Document, DocumentMetaData>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document, DocumentMetaData>) => MutableModel<Document, DocumentMetaData> | void): Document;
}