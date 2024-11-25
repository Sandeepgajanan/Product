interface TestimonialProps {
  id: string;
  name: string;
  message: string;
  rating: number;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl flex flex-shrink-0 w-72 flex-col min-h-52 justify-between  max-sm:w-60">
      <p className="text-zinc-400 text-sm mb-6 italic leading-relaxed">
        &quot;{testimonial.message}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#27E0B3] flex items-center justify-center shadow-md">
          <span className="text-zinc-900 font-bold text-lg">
            {testimonial.name[0]}
          </span>
        </div>
        <div>
          <h4 className="text-zinc-100 font-bold mb-1">{testimonial.name}</h4>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`ri-star-fill text-sm ${
                  i < testimonial.rating ? "text-yellow-400" : "text-zinc-600"
                }`}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
