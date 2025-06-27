import user from "../assets/User.png"

export default function BookingRow({ customer, date, amount, status }) {
  const statusColor = status === 'Confirmed' ? 'text-green-500 bg-green-100 ' : status === 'Pending' ? 'text-yellow-500' : 'text-red-500';
  return (
    <tr>
      <td className="p-2 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-200">
          <img src={user} alt="" />
        </div>
        <div>
          <div>User Name</div>
          <div className="text-sm text-gray-500">{customer}</div>
        </div>
      </td>
      <td className="p-2">{date}</td>
      <td className="p-2">${amount}</td>
      <td className={`p-2 font-semibold ${statusColor}`}>{status}</td>
    </tr>
  );
}