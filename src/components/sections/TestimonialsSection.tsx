import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const testimonials = [
  {
    quote:
      "Orbiverse has turned my cherished moments into glowing memories I can revisit anytime. It's magical!",
    author: "5x3D....EG12",
    img: "/nft-1.png",
  },
  {
    quote:
      "I love how Orbiverse combines emotions and technology. It's like a diary, but for the future!",
    author: "61Jc....3L5s",
    img: "/nft-2.png",
  },
  {
    quote:
      "Orbiverse is a game-changer! It's like having a time machine that I can share with my friends.",
    author: "81mJ....3wQ2",
    img: "/nft-3.png",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  img,
  username,
  body,
}: {
  img: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {username}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
            >
              <p className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-400">— {testimonial.author}</p>
            </div>
          ))}
        </div> */}

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-darkpurple md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.author}
              img={review.img}

              username={review.author}
              body={review.quote}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.author}
              img={review.img}

              username={review.author}
              body={review.quote}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/40"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/40"></div>
      </div>
      </div>

    </section>
  );
}
