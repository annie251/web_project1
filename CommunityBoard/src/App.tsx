import React from 'react';
import EventCard from './EventCard';
import './App.css';

// Define the Event type
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const App = () => {
  const events: Event[] = [
    { id: 1, title: 'React Workshop', date: '2023-10-15', location: 'Virtual', description: 'Learn React from scratch!' },
    { id: 2, title: 'Tech Conference 2023', date: '2023-11-01', location: 'San Francisco, CA', description: 'The biggest tech conference of the year.' },
    { id: 3, title: 'JavaScript Meetup', date: '2023-10-20', location: 'New York, NY', description: 'Networking and talks on JavaScript.' },
    { id: 4, title: 'AI & Machine Learning Expo', date: '2023-11-10', location: 'Chicago, IL', description: 'Explore the future of AI and ML.' },
    { id: 5, title: 'Web Development Bootcamp', date: '2023-10-25', location: 'Austin, TX', description: 'Intensive web development training.' },
    { id: 6, title: 'Cloud Computing Summit', date: '2023-11-05', location: 'Seattle, WA', description: 'Learn about the latest in cloud tech.' },
    { id: 7, title: 'Open Source Hackathon', date: '2023-10-30', location: 'Boston, MA', description: 'Contribute to open-source projects.' },
    { id: 8, title: 'DevOps Conference', date: '2023-11-15', location: 'Denver, CO', description: 'Master the art of DevOps.' },
    { id: 9, title: 'UI/UX Design Workshop', date: '2023-11-08', location: 'Los Angeles, CA', description: 'Design beautiful user interfaces.' },
    { id: 10, title: 'Blockchain Symposium', date: '2023-11-20', location: 'Miami, FL', description: 'Dive into the world of blockchain.' },
  ];

  return (
    <div className="app">
      <h1>Tech Conference Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default App;