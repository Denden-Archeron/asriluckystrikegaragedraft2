export type EventType = 'exhibition' | 'rally' | 'international' | 'technical' | 'festival' | 'ride' | 'education';

export interface AttendedEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: 'recent' | 'past';
  category: EventType;
  highlights: string[];
  ourRole: string;
  featured: boolean;
  galleryCount: number;
  externalLink?: string;
  status: 'attended';
}