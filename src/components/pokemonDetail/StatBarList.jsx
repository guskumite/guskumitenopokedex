import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats }) => {
  console.log(stats);
  for (let index = 0; index < stats?.length; index++) {
    stats[index].key = index;
  }
  return (
    <section>
      <h2 className="text-center">Stats</h2>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.key} stat={stat} />
        ))}
      </section>
    </section>
  );
};

export default StatBarList;
