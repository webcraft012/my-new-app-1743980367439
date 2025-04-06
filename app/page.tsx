import Link from 'next/link';
  import Image from 'next/image';
  import { Button } from '@/components/ui/button';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

  export default function HomePage() {
    return (
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/hero.jpg"
              alt="Salon Luxe"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Salon Luxe</h1>
            <p className="text-xl md:text-2xl mb-6">Experience Luxury & Style</p>
            <Link href="/booking">
              <Button size="lg">Book Now</Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            At Salon Luxe, we provide top-tier hair, beauty, and wellness services in a luxurious environment. Our expert stylists and therapists are dedicated to making you look and feel your best.
          </p>
          <p className="text-lg">
            Discover the difference with personalized care, premium products, and a relaxing atmosphere.
          </p>
        </section>

        {/* Services Preview */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Hair Styling', image: '/services/hair.jpg', description: 'Cuts, coloring, and styling tailored to you.' },
              { title: 'Nail Care', image: '/services/nails.jpg', description: 'Manicures, pedicures, and nail art.' },
              { title: 'Spa Treatments', image: '/services/spa.jpg', description: 'Relaxing facials and massages.' },
            ].map((service) => (
              <Link href="/services" key={service.title} className="group border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg'].map((src, idx) => (
              <SwiperSlide key={idx}>
                <Link href="/gallery">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image src={src} alt={`Gallery image ${idx + 1}`} layout="fill" objectFit="cover" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Clients Say</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              { name: 'Emily R.', photo: '/testimonials/emily.jpg', text: 'Absolutely love my new hairstyle! The team is amazing.' },
              { name: 'Sophia L.', photo: '/testimonials/sophia.jpg', text: 'Best spa experience ever. So relaxing and rejuvenating.' },
              { name: 'Olivia M.', photo: '/testimonials/olivia.jpg', text: 'My nails have never looked better. Highly recommend!' },
            ].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                    <Image src={testimonial.photo} alt={testimonial.name} layout="fill" objectFit="cover" />
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-2">123 Luxury Ave, Suite 100</p>
            <p className="mb-2">Cityville, ST 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-6">Email: info@salonluxe.com</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="w-full h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.419415684681!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1234567%3A0xabcdef1234567890!2sSalon%20Luxe!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    );
  }