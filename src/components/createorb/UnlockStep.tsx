import dynamic from 'next/dynamic';

type UnlockStepProps = {
  data: {
    type: string;
    date: string;
    location: { lat: number; lng: number };
  };
  onChange: (data: any) => void;
};

const MapPicker = dynamic(() => import('./MapPicker'), { ssr: false });

export function UnlockStep({ data, onChange }: UnlockStepProps) {
  
  return (
    <div className="space-y-6 h-full">
      <div>
        <label className="block text-lg font-medium mb-4">Choose Unlock Method</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`p-4 rounded-lg border ${
              data.type === 'date'
                ? 'border-white bg-white/20'
                : 'border-white/20 hover:bg-white/10'
            }`}
            onClick={() => onChange({ ...data, type: 'date' })}
          >
            <div className="text-2xl mb-2">📅</div>
            <div className="font-medium">Date & Time</div>
            <div className="text-sm text-white/60">Unlock on a specific date</div>
          </button>

          <button
            className={`p-4 rounded-lg border ${
              data.type === 'location'
                ? 'border-white bg-white/20'
                : 'border-white/20 hover:bg-white/10'
            }`}
            onClick={() => onChange({ ...data, type: 'location' })}
          >
            <div className="text-2xl mb-2">📍</div>
            <div className="font-medium">Location</div>
            <div className="text-sm text-white/60">Unlock at a specific place</div>
          </button>

          <button
            className={`p-4 rounded-lg border ${
              data.type === 'manual'
                ? 'border-white bg-white/20'
                : 'border-white/20 hover:bg-white/10'
            }`}
            onClick={() => onChange({ ...data, type: 'manual' })}
          >
            <div className="text-2xl mb-2">🔓</div>
            <div className="font-medium">Manual</div>
            <div className="text-sm text-white/60">Unlock whenever you want</div>
          </button>
        </div>
      </div>

      {data.type === 'date' && (
        <div>
          <label className="block text-sm font-medium mb-2">Select Unlock Date & Time</label>
          <input
            type="datetime-local"
            className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
            value={data.date}
            onChange={(e) => onChange({ ...data, date: e.target.value })}
          />
        </div>
      )}

      {data.type === 'location' && (
        <div>
          <label className="block text-sm font-medium mb-2">Select Location</label>
          <div className="h-auto bg-white/10 rounded-lg border border-white/20">
            <MapPicker />
          </div>
        </div>
      )}
    </div>
  );
} 