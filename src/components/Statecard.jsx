export default function StatCard({ title, value, change, isPositive }) {
  return (
    <div className="p-4 border rounded shadow bg-white flex-1">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <div className="text-2xl font-bold">{value}</div>
      <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>{change} from last month</div>
    </div>
  );
}