interface Data {
  record: Record;
  metadata: Metadata;
} 

interface Record {
  notes: Note[];
}

interface Note {
  id: string;
  date: string;
  title: string;
  autor: string;
  section: string;
  image: string;
  type: string;
}

interface Metadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

export { Data, Record, Note, Metadata }