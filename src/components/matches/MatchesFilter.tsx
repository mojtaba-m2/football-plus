function MatchesFilter() {
  return (
    <form action="" className="flex justify-center gap-6 lg:text-2xl">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="date"
          id="all"
          value={"all"}
          defaultChecked

        />
        <label htmlFor="all">همه</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="date"
          id="today"
          value={"today"}

        />
        <label htmlFor="today">امروز</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="date"
          id="tomorrow"
          value={"tomorrow"}

        />
        <label htmlFor="tomorrow">فردا</label>
      </div>
    </form>
  );
}

export default MatchesFilter;
