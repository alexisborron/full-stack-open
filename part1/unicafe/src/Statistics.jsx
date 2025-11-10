const StatisticLine = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>
      {value} {label === "positive" && "%"}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total }) => {
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine label="good" value={good} />
            <StatisticLine label="neutral" value={neutral} />
            <StatisticLine label="bad" value={bad} />
            <StatisticLine label="all" value={total} />
            <StatisticLine label="average" value={average} />
            <StatisticLine label="positive" value={positive} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statistics;
