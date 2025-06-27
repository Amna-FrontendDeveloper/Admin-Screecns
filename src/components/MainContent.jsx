import StatCard from './Statecard';
import BookingRow from './BookingRow';
import RevenueBarChart from './RevenueBarChart';
import BookingTrendsChart from './BookingTrendsChart';

export default function MainContent() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const revenue = [3000, 2500, 4000, 3500, 6000, 4500, 5000];
  const bookings = [20, 140, 160, 80, 150, 220];

  return (
    <div className="p-4 space-y-6 overflow-auto">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Bookings" value="1250" change="12.5" isPositive />
        <StatCard title="New Bookings" value="250" change="12.5" isPositive />
        <StatCard title="Avg. Booking Value" value="$150" change="12.5" isPositive={false} />
        <StatCard title="Total Revenue" value="$150" change="12.5" isPositive={false} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingTrendsChart dataLabels={days} dataValues={bookings} />
        <RevenueBarChart dataLabels={days} dataValues={revenue} />
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white border rounded-lg shadow p-4">
        <h2 className="font-semibold mb-4 text-gray-800">Recent Bookings</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="p-2">Customer</th>
              <th className="p-2">Booking Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <BookingRow customer="email123@gmail.com" date="April 24, 2025" amount="250" status="Confirmed" />
            <BookingRow customer="email123@gmail.com" date="April 24, 2025" amount="250" status="Pending" />
            <BookingRow customer="email123@gmail.com" date="April 24, 2025" amount="250" status="Confirmed" />
          </tbody>
        </table>
      </div>
    </div>
  );
}
