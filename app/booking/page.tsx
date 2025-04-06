import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const services = [
  { id: 'haircut', name: 'Haircut' },
  { id: 'coloring', name: 'Coloring' },
  { id: 'styling', name: 'Styling' },
];

export default function BookingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book an Appointment</h1>

      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for booking!</h2>
          <p>We have received your appointment request and will contact you shortly.</p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <iframe
              src="https://calendly.com/your-booking-link"
              width="100%"
              height="600"
              frameBorder="0"
              title="Booking Widget"
              className="w-full rounded-md border"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div>
              <p className="mb-2 font-medium">Select Date</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              {date && (
                <p className="mt-2">Selected date: {format(date, 'PPP')}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Book Appointment
            </Button>
          </form>
        </>
      )}
    </div>
  );
}