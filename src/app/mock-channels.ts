import { Channel } from './channel.model';

const now = new Date().getTime();

export const CHANNELS: Channel[] = [
  {createdAt: now, name: 'Alpha'},
  {createdAt: now, name: 'Beta'},
  {createdAt: now, name: 'Gamma'},
];
