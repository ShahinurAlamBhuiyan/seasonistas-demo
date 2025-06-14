import MetricCard from "../Dashboard/MetricCard"

type Props = {}
const MetricCardsContainer = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <MetricCard
        title="Jobs Applied"
        value="120"
        change={+2.6}
        subtitle="last 10 days"
        bars={[5, 6, 3, 20, 25, 3, 17, 16]}
      />
      <MetricCard
        title="Jobs View"
        value="4 876"
        change={+0.2}
        subtitle="last 7 days"
        bars={[5, 9, 17, 7, 5, 7, 10, 15]}
      />
      <MetricCard
        title="Jobs Saved"
        value="200"
        change={-0.1}
        subtitle="last 7 days"
        bars={[5, 5, 10, 2, 4, 14, 3, 12]}
      />
    </div>
  )
}
export default MetricCardsContainer