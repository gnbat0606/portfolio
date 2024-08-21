import { WebTop } from "./WebTop";
export const AboutMe = () => {
  return (
    <div className=" px-4 py-16 flex flex-col gap-12 bg-gray-50 ">
      <div className="flex flex-col items-center gap-6 ">
        <div className=" text-sm bg-gray-200 py-1 px-5 text-gray-600 rounded-2xl">
          Aboutme
        </div>
        <div className="flex justify-center items-center">
          <img
            src="sagar-full-pose.jpeg"
            className="w-[280px] h-[360px]  relative z-10 border-8 border-white"
            alt=""
          />
          <div className=" absolute w-[312px] h-[352px] z-0 bg-gray-200 mt-10"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-gray-900 text-2xl">
          Curious about me? Here you have it:
        </div>
        <div className="text-gray-600 text-base flex flex-col gap-6 ">
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div>{/* 2 hsegtei text */}</div>
          <div>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </div>
        </div>
      </div>
    </div>
  );
};
