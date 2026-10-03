import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Compass } from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  travelers: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  destination?: string;
  date?: string;
  travelers?: string;
}

const Contact = () => {
  const { bookingDestination } = useTravel();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    travelers: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (bookingDestination) {
      setFormData((prev) => ({ ...prev, destination: bookingDestination }));
    }
  }, [bookingDestination]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please select or enter a destination';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.travelers) {
      newErrors.travelers = 'Please select number of travelers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Your booking request has been submitted successfully! ✈️');

    // Reset form after 4 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        date: '',
        travelers: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const inputClasses = (fieldName: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl bg-card border ${
      errors[fieldName] ? 'border-destructive' : 'border-border'
    } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm`;

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-widest uppercase">Get in Touch</p>
            <h2 className="section-title text-left mb-6">Book Your Dream Trip</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to embark on your next adventure? Fill out the form and our travel experts will craft the perfect itinerary tailored to your desires.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="text-foreground font-medium">hello@wanderlustweaver.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-foreground font-medium">+1 (800) 555-WEAVE (+1 800 555 9328)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Global Headquarters</p>
                  <p className="text-foreground font-medium">100 Wanderlust Boulevard, Travel City, CA</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-card border border-border p-5 relative shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '12s' }} />
                  <span className="font-display font-semibold text-foreground text-sm">Interactive Travel Network</span>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">Live Hub</span>
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="text-center relative z-10">
                  <div className="inline-flex p-3 rounded-full bg-primary/20 text-primary mb-2 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-white font-medium text-sm">Destinations Worldwide</p>
                  <p className="text-slate-400 text-xs mt-1">Connecting 500+ Luxury Locations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you, <span className="font-semibold text-foreground">{formData.name}</span>! Our travel team is preparing your custom itinerary for <span className="font-semibold text-foreground">{formData.destination}</span> and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                    Reserve Your Journey
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Complete the details below to request your customized travel package.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses('name')}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses('phone')}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Destination / Package *</label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Santorini, Greece or Package Name"
                    value={formData.destination}
                    onChange={handleChange}
                    className={inputClasses('destination')}
                  />
                  {errors.destination && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.destination}
                    </p>
                  )}
                </div>

                {/* Date & Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Travel Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={inputClasses('date')}
                    />
                    {errors.date && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Number of Travelers *</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className={inputClasses('travelers')}
                    >
                      <option value="">Select Guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People</option>
                    </select>
                    {errors.travelers && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.travelers}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Instructions / Message */}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Special Preferences / Notes</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about special requests, dietary preferences, or custom requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 py-3.5 text-base shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
