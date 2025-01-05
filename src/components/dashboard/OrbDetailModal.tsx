import { StoredOrb } from "@/lib/storage";
import { emotions } from "@/lib/constants";

type OrbDetailModalProps = {
  orb: {
    id: string;
    name: string;
    emotion: string;
    status: string;
    unlockCriteria: string;
    preview: string;
    description: string;
  };
  onClose: () => void;
  onHide: (id: string) => void;
  isHidden?: boolean;
};

export function OrbDetailModal({ orb, onClose, onHide, isHidden }: OrbDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-darkpurple border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 aspect-square">
            <img
              src={orb.preview}
              alt={orb.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{orb.name}</h2>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {orb.emotion}
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {orb.status}
              </span>
            </div>

            <p className="text-white/70 mb-6">{orb.description}</p>

            {orb.unlockCriteria && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-1">Unlock Criteria</h3>
                <p className="text-white/70">
                  {orb.unlockCriteria}
                </p>
              </div>
            )}

            <div className="mt-auto">
              <button
                onClick={() => onHide(orb.id)}
                className={`w-full px-4 py-2 rounded-lg border ${
                  isHidden 
                    ? "bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/20"
                    : "bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20"
                }`}
              >
                {isHidden ? "Restore to vault" : "Hide this memory"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 