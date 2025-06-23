import React from 'react';




const Userinfo = ({ users, onDelete ,onEdit  }) => {


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-left text-xs font-semibold text-gray-600 border-b border-gray-200">
            <th scope="col" className="px-4 py-3 w-56">User</th>
            <th scope="col" className="px-4 py-3">Join Date</th>
            <th scope="col" className="px-4 py-3">Role</th>
            <th scope="col" className="px-4 py-3">Status</th>
            <th scope="col" className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Array.isArray(users) && users.map(user => (
            <tr key={user.id}>
              <td className="px-4 py-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full inline-block mr-2" />
                {user.name}<br />
                <span className="text-sm text-gray-500">{user.email}</span>
              </td>
              <td className="px-4 py-3">{user.joinDate}</td>
              <td
  className={`inline-flex mt-7 tracking-wider px-3  py-1 text-xs font-semibold leading-5 rounded-full
    ${user.role === "Customer" ? "bg-red-500" : user.role === "Chef" ? "bg-orange-400" : "bg-gray-200"}`}
>
  {user.role}
</td>
              <td className="px-4 py-3">
                <span className={`inline-flex px-2 py-1 tracking-wider  text-xs font-semibold leading-5 rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
              <button
  className="text-blue-500 hover:text-blue-700"
  onClick={() => onEdit(user)} // user object bhejo
>
  ✏️
</button>
                <button
  className="text-red-500 hover:text-red-700 ml-2"
  onClick={() => onDelete(user.id)} // yahan user.id delete hoga
>
  🗑️
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userinfo;
