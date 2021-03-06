import { EventData } from './event-data';
import { Subjects } from './subjects';

export interface Event {
  subjects: Subjects;
  data: EventData;
}
