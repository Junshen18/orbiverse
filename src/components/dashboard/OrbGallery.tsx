import { useRouter } from "next/navigation";

type Orb = {
  id: string;
  name: string;
  emotion: string;
  status: string;
  unlockDate: string;
  preview: string;
};

// Dummy data for demonstration
const dummyOrbs: Orb[] = [
  {
    id: "1",
    name: "Birthday 2024",
    emotion: "happy",
    status: "locked",
    unlockDate: "2025-01-01",
    preview: "/gradient-1.png",
  },
  {
    id: "2",
    name: "2024 Recap",
    emotion: "happy",
    status: "locked",
    unlockDate: "",
    preview: "/sea.jpg",
  },
  {
    id: "3",
    name: "2023 Recap",
    emotion: "love",
    status: "locked",
    unlockDate: "",
    preview: "/sunset.png",
  },
  {
    id: "4",
    name: "2022 Recap",
    emotion: "love",
    status: "locked",
    unlockDate: "",
    preview: "/field.jpg",
  },
  
  // Add more dummy orbs...
];

type OrbCardProps = {
  orb: Orb;
};

function OrbCard({ orb }: OrbCardProps) {
  return (
    <div className="w-[300px] h-[300px] group relative overflow-hidden rounded-full border border-white/10 hover:border-white/20 transition-all duration-300
      shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50
      transform hover:scale-105">
      <div className="relative">
        <img
          src={orb.preview}
          alt={orb.name}
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </div>
      <div className="absolute bottom-[0%] left-[50%] translate-x-[-50%] right-0 p-4 transform translate-y-full group-hover:translate-y-[-50%] transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-1 text-center">{orb.name}</h3>
        <div className="flex gap-2 justify-center items-center">
          <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
            {orb.emotion}
          </span>
          <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
            {orb.status}
          </span>
        </div>
      </div>
    </div>
  );
}


type OrbGalleryProps = {
  filter: {
    search: string;
    emotion: string;
    status: string;
    sortBy: string;
  };
};

function CreateOrbButton() {
const router = useRouter();
  return (
    <div onClick={()=>{
      router.push("/authenticated-pages/createorb");
    }} className="w-[300px] h-[300px] group relative overflow-hidden rounded-full border border-white/10 hover:border-white/20 transition-all duration-300
      shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
      transform hover:scale-105 cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
            <span className="text-4xl text-white/50">+</span>
          </div>
          <span className="text-lg font-semibold text-white/50">Create New Orb</span>
        </div>
      </div>
    </div>
  );
}

export function OrbGallery({ filter }: OrbGalleryProps) {
  // Filter and sort orbs based on filter criteria
  const filteredOrbs = dummyOrbs.filter((orb) => {
    if (filter.emotion !== "all" && orb.emotion !== filter.emotion) return false;
    if (filter.status !== "all" && orb.status !== filter.status) return false;
    if (filter.search && !orb.name.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  // Split orbs into rows of 5
  const rows: Orb[][] = [];
  for (let i = 0; i < filteredOrbs.length; i += 5) {
    rows.push(filteredOrbs.slice(i, i + 5));
  }

  return (
    <div className="relative flex flex-col gap-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 w-full bg-darkpurple p-4 rounded-full">
          {row.map((orb) => (
            <OrbCard key={orb.id} orb={orb} />
          ))}
          {/* Add CreateOrbButton only in the last row if there's space */}
          {rowIndex === rows.length - 1 && row.length < 5 && <CreateOrbButton />}
        </div>
      ))}
      {/* Add a new row with just the CreateOrbButton if the last row is full */}
      {filteredOrbs.length % 5 === 0 && (
        <div className="grid grid-cols-5 w-full bg-darkpurple p-4 rounded-full">
          <CreateOrbButton />
        </div>
      )}
    </div>
  );
} 