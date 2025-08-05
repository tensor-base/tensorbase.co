type TestimonialCardProps = {
  name: string;
  handle: string;
  avatarUrl: string;
  tweetUrl: string;
  content: React.ReactNode;
};

export const TestimonialCard = ({
  name,
  handle,
  avatarUrl,
  tweetUrl,
  content,
}: TestimonialCardProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={tweetUrl}
      className="sm:min-w-[250px] relative xl:z-20 text-left transition-transform scale-100 hover:scale-[102%] duration-300"
    >
      <div className="dark:bg-[#111111] transition-all border not-prose rounded-lg shadow-sm border-gray-800 hover:border-gray-900 relative hover:shadow-neutral-800/5 hover:shadow-lg p-4">
        <div className="flex items-center justify-center overflow-hidden z-10">
          <div className="w-full">
            <div className="flex items-center mb-2">
              {/* <Image
                alt={`${name}'s avatar`}
                loading="lazy"
                width="48"
                height="48"
                className="size-12 mr-3 rounded-full"
                src={avatarUrl}
              /> */}
              <div>
                <p className="font-bold text-[15px] text-neutral-900 dark:text-neutral-100">
                  {name}
                </p>
                <p className="text-[15px] text-neutral-500">{handle}</p>
              </div>
            </div>
            <div className="text-[15px] text-neutral-700 dark:text-neutral-300 mt-2">
              {content}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
