import { OrbData } from "@/lib/types";

type ContentStepProps = {
  data: OrbData['content'];
  onChange: (content: OrbData['content']) => void;
};

export function ContentStep({ data, onChange }: ContentStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Memory Title</label>
        <input
          className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
          placeholder="Enter a title for your memory..."
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Memory Description</label>
        <textarea
          className="w-full h-32 px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
          placeholder="Describe your memory..."
          value={data.text}
          onChange={(e) => onChange({ ...data, text: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Add Images</label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-lg hover:bg-white/5 cursor-pointer">
            <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span className="mt-2 text-sm text-white/50">Click to upload images</span>
            <input type="file" className="hidden" accept="image/*" multiple />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Attach Files</label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-lg hover:bg-white/5 cursor-pointer">
            <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span className="mt-2 text-sm text-white/50">Click to attach files</span>
            <input type="file" className="hidden" multiple />
          </label>
        </div>
      </div>
    </div>
  );
} 