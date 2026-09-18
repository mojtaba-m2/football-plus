import { TSelectedUser } from "@/types/matche";

interface IMatchesFilterProps {
  selectedDate: TSelectedUser;
  onDateChange: (date: TSelectedUser) => void;
}

const filters: { value: TSelectedUser; label: string }[] = [
  { value: "all", label: "همه" },
  { value: "today", label: "امروز" },
  { value: "tomorrow", label: "فردا" },
];

function MatchesFilter({ selectedDate, onDateChange }: IMatchesFilterProps) {
  return (
    <form action="" className="flex justify-center gap-6 lg:text-2xl">
      {filters.map((filter) => (
        <div key={filter.value} className="flex items-center gap-2">
          <input
            type="radio"
            name="date"
            id={filter.value}
            value={filter.value}
            checked={selectedDate === filter.value}
            onChange={(e) => {
              onDateChange(e.target.value as TSelectedUser);
            }}
          />
          <label htmlFor={filter.value}>{filter.label}</label>
        </div>
      ))}
    </form>
  );
}

export default MatchesFilter;
