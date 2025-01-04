type FilterBarProps = {
  filter: {
    search: string;
    emotion: string;
    status: string;
    sortBy: string;
  };
  setFilter: (filter: any) => void;
};

export function FilterBar({ filter, setFilter }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white/5 backdrop-blur-lg rounded-lg">
      <input
        type="text"
        placeholder="Search orbs..."
        className="flex-1 min-w-[200px] px-4 py-2 bg-white/10 rounded-full border border-white/20 focus:outline-none focus:border-white/40"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      
      <select
        className="px-4 py-2 bg-white/10 rounded-full border border-white/20"
        value={filter.emotion}
        onChange={(e) => setFilter({ ...filter, emotion: e.target.value })}
      >
        <option value="all">All Emotions</option>
        <option value="happy">Happy</option>
        <option value="nostalgic">Nostalgic</option>
        <option value="excited">Excited</option>
      </select>

      <select
        className="px-4 py-2 bg-white/10 rounded-full border border-white/20"
        value={filter.status}
        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
      >
        <option value="all">All Status</option>
        <option value="locked">Locked</option>
        <option value="unlocked">Unlocked</option>
        <option value="pending">Pending</option>
      </select>

      <select
        className="px-4 py-2 bg-white/10 rounded-full border border-white/20"
        value={filter.sortBy}
        onChange={(e) => setFilter({ ...filter, sortBy: e.target.value })}
      >
        <option value="date">Date Created</option>
        <option value="unlock-date">Unlock Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
} 