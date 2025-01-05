import { useRouter } from "next/navigation";
import { getOrbs, StoredOrb } from "@/lib/storage";
import { OrbDetailModal } from "./OrbDetailModal";
import {
  hideOrb,
  isOrbHidden,
  unhideOrb,
  getHiddenOrbsData,
} from "@/lib/storage";
import { useState, useEffect } from "react";

type Orb = {
  id: string;
  name: string;
  emotion: string;
  status: string;
  unlockCriteria: string;
  preview: string;
  description: string;
};

// Dummy data for demonstration
const dummyOrbs: Orb[] = [
  {
    id: "1",
    name: "Birthday 2024",
    emotion: "happy",
    status: "locked",
    unlockCriteria: "data",
    preview: "/gradient-1.png",
    description: "This is a description of the memory",
  },
  {
    id: "2",
    name: "2024 Recap",
    emotion: "happy",
    status: "locked",
    unlockCriteria: "manual",
    preview: "/sea.jpg",
    description: "This is a description of the memory",
  },
  {
    id: "3",
    name: "2023 Recap",
    emotion: "love",
    status: "locked",
    unlockCriteria: "location",
    preview: "/sunset.png",
    description: "This is a description of the memory",
  },
  {
    id: "4",
    name: "2022 Recap",
    emotion: "love",
    status: "locked",
    unlockCriteria: "location",
    preview: "/field.jpg",
    description: "This is a description of the memory",
  },

  // Add more dummy orbs...
];

type OrbCardProps = {
  orb: Orb;
  onSelect: (orb: Orb) => void;
};

function OrbCard({ orb, onSelect }: OrbCardProps) {
  const handleClick = () => {
    onSelect(orb);
  };

  // Check if the preview is a base64 string
  // const isBase64 = orb.preview.startsWith("data:image");

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-[75px] h-[75px] md:w-[300px] md:h-[300px] group relative overflow-hidden rounded-full border border-white/10 hover:border-white/20 transition-all duration-300
      shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50
      transform hover:scale-105"
    >
      <div className="relative">
        {/* {isBase64 ? (
          <img
            src={orb.preview}
            alt={orb.name}
            className="w-[300px] h-[300px] object-cover rounded-full"
          />
        ) : ( */}
          <img
            src={orb.preview || `/gradient-${Math.floor(Math.random() * 7) + 1}.png`}
            alt={orb.name}
            className="w-[75px] h-[75px] md:w-[300px] md:h-[300px] object-cover rounded-full"
          />
        {/* )} */}
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
          <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
            {orb.unlockCriteria}
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
    <div
      onClick={() => {
        router.push("/authenticated-pages/createorb");
      }}
      className=" w-[300px] h-[300px] group relative overflow-hidden rounded-full border border-white/10 hover:border-white/20 transition-all duration-300
      shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
      transform hover:scale-105 cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
            <span className="md:text-4xl text-2xl text-white/50">+</span>
          </div>
          <span className="md:text-lg text-xs font-medium md:font-semibold text-white/50">
            Create New Orb
          </span>
        </div>
      </div>
    </div>
  );
}

export function OrbGallery({ filter }: OrbGalleryProps) {
  const [selectedOrb, setSelectedOrb] = useState<Orb | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get orbs based on view mode
  const getFilteredOrbs = () => {
    if (showHidden) {
      return getHiddenOrbsData();
    }

    const storedOrbs = getOrbs().map((orb) => ({
      id: orb.id,
      name: orb.content.title,
      emotion: orb.customization.emotion,
      status: "locked",
      unlockCriteria: orb.unlockCriteria.type || "manual",
      preview: orb.content.images[0] || `/gradient-${Math.floor(Math.random() * 7) + 1}.png`,
      description: orb.content.text,
    }));

    const allOrbs = [...dummyOrbs, ...storedOrbs];
    return allOrbs.filter((orb) => {
      if (isOrbHidden(orb.id)) return false;
      if (filter.emotion !== "all" && orb.emotion !== filter.emotion)
        return false;
      if (filter.status !== "all" && orb.status !== filter.status) return false;
      if (
        filter.search &&
        !orb.name.toLowerCase().includes(filter.search.toLowerCase())
      )
        return false;
      return true;
    });
  };

  const filteredOrbs = getFilteredOrbs() as Orb[];

  const handleHideOrb = (orbId: string) => {
    hideOrb(orbId);
    setSelectedOrb(null);
  };

  const handleUnhideOrb = (orbId: string) => {
    unhideOrb(orbId);
    setSelectedOrb(null);
  };

  // Split orbs into rows of 4 for mobile and 5 for desktop
  const rows: Orb[][] = [];
  const itemsPerRow = isMobile ? 4 : 5;
  for (let i = 0; i < filteredOrbs.length; i += itemsPerRow) {
    rows.push(filteredOrbs.slice(i, i + itemsPerRow));
  }

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {showHidden && <h2 className="text-xl font-semibold w-full">
          Hidden Orbs
        </h2>}
        {!showHidden && (
            <div
              className="md:hidden w-56 cursor-pointer text-sm px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full"
              onClick={() => router.push("/authenticated-pages/createorb")}
            >
              Create New Orb
            </div>
          )}
        <div className="flex md:gap-2 justify-end w-full">
        {!showHidden && (
            <div
              className="hidden md:block cursor-pointer text-sm px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full"
              onClick={() => router.push("/authenticated-pages/createorb")}
            >
              Create New Orb
            </div>
          )}
          <button
            onClick={() => setShowHidden(!showHidden)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm"
          >
            {showHidden ? "Back to Vault" : "View Hidden Orbs"}
          </button>
        </div>
      </div>

      <div className="relative flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-4 md:grid-cols-5 w-full bg-darkpurple p-2 md:p-4 rounded-full"
          >
            {row.map((orb) => (
              <OrbCard key={orb.id} orb={orb} onSelect={setSelectedOrb} />
            ))}
            {/* Add CreateOrbButton only in the last row if there's space */}
            {!isMobile && rowIndex === rows.length - 1 && 
             ((window.innerWidth >= 768 && row.length < 5) || 
              (window.innerWidth < 768 && row.length < 4)) && 
             !showHidden && (
              <CreateOrbButton />
            )}
          </div>
        ))}
        {/* Add a new row with just the CreateOrbButton if the last row is full */}
        {!isMobile &&
        ((window.innerWidth >= 768 && filteredOrbs.length % 5 === 0) ||
          (window.innerWidth < 768 && filteredOrbs.length % 4 === 0)) && 
         !showHidden && (
          <div className="grid grid-cols-4 md:grid-cols-5 w-full bg-darkpurple p-4 rounded-full">
            <CreateOrbButton />
          </div>
        )}
        {filteredOrbs.length % 5 === 0 && showHidden && (
          <div className={`h-[91px] md:h-80 grid ${filteredOrbs.length > 0 && 'grid-cols-4 md:grid-cols-5'}  w-full bg-darkpurple p-4 rounded-full items-center justify-center`}>
            {filteredOrbs.length === 0 && (
              <p className="text-white text-center">No hidden orbs yet</p>
            )}
          </div>
        )}
      </div>

      {selectedOrb && (
        <OrbDetailModal
          orb={selectedOrb}
          onClose={() => setSelectedOrb(null)}
          onHide={showHidden ? handleUnhideOrb : handleHideOrb}
          isHidden={showHidden}
        />
      )}
    </>
  );
}
