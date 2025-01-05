import { OrbData } from "@/lib/types";
import { useState } from "react";

type ContentStepProps = {
  data: OrbData['content'];
  onChange: (content: OrbData['content']) => void;
};

export function ContentStep({ data, onChange }: ContentStepProps) {
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    const newPreviews: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB');
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        newImages.push(base64String);
        newPreviews.push(base64String);
        
        if (newImages.length === files.length) {
          onChange({ ...data, images: [...data.images, ...newImages] });
          setImagePreview([...imagePreview, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...data.images];
    const newPreviews = [...imagePreview];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    onChange({ ...data, images: newImages });
    setImagePreview(newPreviews);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Memory Title <span className="text-red-400">*</span>
        </label>
        <input
          className={`w-full px-4 py-2 bg-white/10 rounded-lg border focus:outline-none ${
            !data.title.trim() ? 'border-red-500/50' : 'border-white/20 focus:border-white/40'
          }`}
          placeholder="Enter a title for your memory..."
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
        {!data.title.trim() && (
          <p className="mt-1 text-red-400 text-xs">Title is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Memory Description <span className="text-red-400">*</span>
        </label>
        <textarea
          className={`w-full h-32 px-4 py-2 bg-white/10 rounded-lg border focus:outline-none ${
            !data.text.trim() ? 'border-red-500/50' : 'border-white/20 focus:border-white/40'
          }`}
          placeholder="Describe your memory..."
          value={data.text}
          onChange={(e) => onChange({ ...data, text: e.target.value })}
        />
        {!data.text.trim() && (
          <p className="mt-1 text-red-400 text-xs">Description is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Add Images</label>
        <div className="space-y-4">
          {/* Image preview grid */}
          {imagePreview.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {imagePreview.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload button */}
          <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-lg hover:bg-white/5 cursor-pointer">
            <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span className="mt-2 text-sm text-white/50">Click to upload images</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>
          <p className="text-xs text-white/50 text-center">Maximum file size: 5MB</p>
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