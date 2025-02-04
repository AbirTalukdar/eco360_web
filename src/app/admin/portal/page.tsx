// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const AdminPortalPage = () => {
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   // Fetch user data
//   const fetchUser = async () => {
//     try {
//       const token = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('token='))
//         ?.split('=')[1];

//       if (!token) {
//         throw new Error('Unauthorized! Please log in.');
//       }

//       const response = await fetch('http://localhost:5000/api/auth/verify-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to authenticate.');
//       }

//       const data = await response.json();
//       setUser(data.user);
//     } catch (err: any) {
//       setError(err.message);
//       setTimeout(() => router.push('/'), 3000); // Redirect to login page after 3 seconds
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-red-100">
//         <p className="text-red-600 text-xl">{error}</p>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <p className="text-gray-600 text-xl">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Admin Portal</h1>
//       <h2 className="text-2xl mb-4">Welcome, {user.name}</h2>
//       <p className="text-lg mb-4">Role: {user.role}</p>
//       <p className="text-lg mb-8">
//         Status: {user.status ? 'Active' : 'Inactive'}
//       </p>

//       <div className="flex gap-4">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => alert('Feature coming soon!')}
//         >
//           Manage Users
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => alert('Feature coming soon!')}
//         >
//           View Reports
//         </button>
//         <button
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//           onClick={() => alert('Feature coming soon!')}
//         >
//           Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminPortalPage;




import AdminLayout from "@/components/layouts/AdminLayout";

const PortalPage = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Portal</h1>
      <p className="mt-4">
        Welcome to the admin portal. Use the navigation menu to explore features.
      </p>
    </AdminLayout>
  );
};

export default PortalPage;
