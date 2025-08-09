// components/TestimonialsGrid.tsx
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Sully",
    handle: "@SullyOmarr",
    avatarUrl: "/images/avatar/SullyOmarr.jpg",
    tweetUrl: "https://x.com/SullyOmarr/status/1885049394342310335",
    content: (
      <>
        <div className="mt-4">
          the @aisdk is probably the best way to build an ai app right now
        </div>
        <div className="mt-4"></div>
        <div className="mt-4">
          you can go from idea -&gt; working ai app in 15 mins.
        </div>
        <div className="mt-4"></div>
        <div className="mt-4">
          its made working with llms 10x more enjoyable ( and we ship faster)
        </div>
      </>
    ),
  },
  {
    name: "Max Baines",
    handle: "@maxbaines",
    avatarUrl: "/images/avatar/maxbaines.jpg",
    tweetUrl: "https://x.com/maxbaines/status/1875207718618935302",
    content: (
      <div className="mt-4">
        Hands down the @aisdk is by far the best SDK I have worked with, thats
        pretty much all things since jQuery.
      </div>
    ),
  },
  {
    name: "Micky",
    handle: "@rasmickyy",
    avatarUrl: "/images/avatar/rasmickyy.jpg",
    tweetUrl: "https://x.com/rasmickyy/status/1855398758554439824",
    content: (
      <>
        <div className="mt-4">
          vercel ai sdk is just sooo good it hurts man...
        </div>
        <div className="mt-4"></div>
        <div className="mt-4">
          can literally build ai features within any of my apps in mins
        </div>
      </>
    ),
  },
  {
    name: "morgan",
    handle: "@morganlinton",
    avatarUrl: "/images/avatar/morganlinton.jpg",
    tweetUrl: "https://x.com/morganlinton/status/1884257150761066894",
    content: <div className="mt-4">The AI SDK is 🔥🔥🔥</div>,
  },
  {
    name: "Tom Watkins",
    handle: "@TomWatkins1994",
    avatarUrl: "/images/avatar/tomwatkins1994.jpg",
    tweetUrl: "https://x.com/TomWatkins1994/status/1829200829150339230",
    content: <div className="mt-4">the AI SDK is S tier software</div>,
  },
  {
    name: "Matt Pocock",
    handle: "@mattpocockuk",
    avatarUrl: "/images/avatar/mattpocockuk.jpg",
    tweetUrl: "https://x.com/mattpocockuk/status/1874822204824731717",
    content: (
      <div className="mt-4">
        Vercel&apos;s AI SDK is one of the first tools I reach for when I&apos;m
        building an AI-powered feature in TypeScript.
      </div>
    ),
  },
  {
    name: "Kyle Mistele 🏴‍☠️",
    handle: "@0xblacklight",
    avatarUrl: "/images/avatar/0xblacklight.jpg",
    tweetUrl: "https://x.com/0xblacklight/status/1866886257055342787",
    content: (
      <>
        <div className="mt-4">
          Vercel&apos;s @aisdk is insanely good. Docs are fantastic. Great
          abstractions where you want them, doesn&apos;t force unnecessary ones,
          and lets you get under the hood where appropriate. Solves the hard
          stuff (stream parsing, tool streaming, multi-turn tool execution,
          error handling and healing/recovery) without forcing you into dumb
          patterns
        </div>
        <div className="mt-4"></div>
        <div className="mt-4">
          It just works, it&apos;s fantastic software and delightful to use. The
          team ships insanely fast, and has turned PRs from me around in like 2
          days, and frequently ships requested features in &lt; 1w
        </div>
      </>
    ),
  },
  {
    name: "Ryan Carson",
    handle: "@ryancarson",
    avatarUrl: "/images/avatar/ryancarson.jpg",
    tweetUrl: "https://x.com/ryancarson/status/1877170074538180811",
    content: (
      <div className="mt-4">
        I love @vercel and their @aisdk - so freaking easy to deploy.
      </div>
    ),
  },
  {
    name: "Olivier",
    handle: "@StonkyOli",
    avatarUrl: "/images/avatar/stonkyoli.jpg",
    tweetUrl: "https://x.com/StonkyOli/status/1858922730181324938",
    content: (
      <>
        <div className="mt-4">Big fan of the AI SDK</div>
        <div className="mt-4"></div>
        <div className="mt-4">
          It has blown away my expectations since i started using it, way better
          than raw dogging oai
        </div>
      </>
    ),
  },
  {
    name: "EGOIST",
    handle: "@localhost_5173",
    avatarUrl: "/images/avatar/localhost_5173.jpg",
    tweetUrl: "https://x.com/localhost_5173/status/1794004340375802108",
    content: (
      <div className="mt-4">
        Vercel AI SDK is so good, there&apos;s no reason to directly use
        npm/openai or npm/claude anymore
      </div>
    ),
  },
  {
    name: 'sunil "yeah no" pai',
    handle: "@threepointone",
    avatarUrl: "/images/avatar/threepointone.jpg",
    tweetUrl: "https://x.com/threepointone/status/1818719331276276189",
    content: <div className="mt-4">vercel ai sdk is very good actually</div>,
  },
  {
    name: "Pontus Abrahamsson",
    handle: "@pontusab",
    avatarUrl: "/images/avatar/pontusab.jpg",
    tweetUrl: "https://x.com/pontusab/status/1824398511099510791",
    content: (
      <div className="mt-4">
        With the ai sdk available i&apos;m always thinking: &quot;How can I make
        this process as automatic as possible for the user?&quot; because the
        barrier to implementing it is just a matter of minutes.
      </div>
    ),
  },
  {
    name: "ben",
    handle: "@benhylak",
    avatarUrl: "/images/avatar/benhylak.jpg",
    tweetUrl: "https://x.com/benhylak/status/1866931335291629995",
    content: (
      <>
        <div className="mt-4">
          @aisdk has made it possible to just call &quot;generateObject&quot;
          across any model provider, and it returns a properly typed json
          object.
        </div>
        <div className="mt-4"></div>
        <div className="mt-4">it&apos;s pure magic.</div>
      </>
    ),
  },
  {
    name: "sami",
    handle: "@svmisvhn",
    avatarUrl: "/images/avatar/svmisvhn.jpg",
    tweetUrl: "https://x.com/svmisvhn/status/1808950039676342339",
    content: (
      <div className="mt-4">
        huge shoutout to @vercel for the ai sdk, one API for all LLMs is 🤯
      </div>
    ),
  },
];

// Distribute testimonials into columns based on the original HTML structure
// This creates the masonry effect at different breakpoints
const columns = [
  testimonials.slice(0, 5), // Column 1
  testimonials.slice(5, 9), // Column 2
  testimonials.slice(9, 14), // Column 3
];

export const TestimonialsGrid = () => {
  return (
    <>
      <div className="p-2 py-6 text-2xl font-bold tracking-tight sm:text-3xl md:p-8">
        What people say about Tensor Base
      </div>
      <div className="grid w-full grid-cols-1 gap-4 p-6 mx-auto overflow-y-visible sm:grid-cols-2 lg:grid-cols-3 sm:p-8">
        {/* Column 1 - Always Visible */}
        <div className="flex flex-col space-y-4">
          {columns[0].map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
        </div>

        {/* Column 2 - Visible on SM and MD, hidden on LG+ */}
        <div className="flex-col hidden space-y-4 sm:flex lg:hidden">
          {columns[1].slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
          {columns[2].slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
        </div>

        {/* Column 2 - Visible on LG+ */}
        <div className="flex-col hidden space-y-4 lg:flex">
          {columns[1].map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
        </div>

        {/* Column 3 - Always Visible on SM+ */}
        <div className="flex-col hidden space-y-4 sm:flex">
          {columns[2].map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};
