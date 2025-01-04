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
  // Add more dummy orbs...
];

type OrbCardProps = {
  orb: Orb;
};

function OrbCard({ orb }: OrbCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="aspect-square relative">
        <img
          src={orb.preview}
          alt={orb.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-1">{orb.name}</h3>
        <div className="flex gap-2">
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

export function OrbGallery({ filter }: OrbGalleryProps) {
  // Filter and sort orbs based on filter criteria
  const filteredOrbs = dummyOrbs.filter((orb) => {
    if (filter.emotion !== "all" && orb.emotion !== filter.emotion) return false;
    if (filter.status !== "all" && orb.status !== filter.status) return false;
    if (filter.search && !orb.name.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredOrbs.map((orb) => (
        <OrbCard key={orb.id} orb={orb} />
      ))}
    </div>
  );
} 