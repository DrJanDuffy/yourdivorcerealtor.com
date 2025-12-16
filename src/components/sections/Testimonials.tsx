type Testimonial = {
  id: string;
  name: string;
  text: string;
  imageUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Andy Creasy',
    text: 'Matt Curtis Real Estate is truly the best. If you\'re buying or selling in this crazy market and aren\'t using Matt Curtis Real Estate you are truly doing yourself a disservice!',
  },
  {
    id: '2',
    name: 'Tiffany & Caleb Kerlin',
    text: 'It isn\'t hard to see why Matt Curtis Real Estate is the #1 Real Estate Team in Alabama. They are incredibly responsive, they treat you with kindness and respect, and you truly feel like you are being given the best service...',
  },
  {
    id: '3',
    name: 'Jim Kershner',
    text: 'We used Matt Curtis Real Estate to list our house on the market after they helped us find our new home. Our house was listed quickly, as we were on a time crunch. Our house sold over the asking price within 5 days of listing due to the incredible help of the Matt Curtis team! You can\'t go wrong by choosing them for your real estate needs.',
  },
  {
    id: '4',
    name: 'April Crosby',
    text: 'We needed to sell our house and had seen the Matt Curtis billboards and thought why not! We wanted to sell our home ASAP, therefore timing was important to us. Our house was fully booked with showing appointments before the home was even technically on the market! We literally sold our home in 2 days and got above asking price!',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;
                {testimonial.text}
                &quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
