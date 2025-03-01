import React from 'react';
import './EventCard.css';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;