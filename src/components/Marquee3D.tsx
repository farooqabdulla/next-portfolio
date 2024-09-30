import Marquee from "@/components/ui/marquee";

interface Logo {
  name: string;
  img: string;
}

const logos: Logo[] = [
  {
    name: "Microsoft",
    img: "https://picsum.photos/id/1/200/300",
  },
  {
    name: "Apple",
    img: "https://picsum.photos/id/2/200/300",
  },
  {
    name: "Google",
    img: "https://picsum.photos/id/3/200/300",
  },
  {
    name: "Facebook",
    img: "https://picsum.photos/id/4/200/300",
  },
  {
    name: "LinkedIn",
    img: "https://picsum.photos/id/5/200/300",
  },
  {
    name: "Twitter",
    img: "https://picsum.photos/id/6/200/300",
  },
];

export function Marquee3D() {
  return (
    <div className="absolute right-0 flex h-full w-96 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg   px-20 ">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-[100vh] justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-[70vw] cursor-pointer rounded-xl border  transition-all duration-300 hover:ring-1 "
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
}
