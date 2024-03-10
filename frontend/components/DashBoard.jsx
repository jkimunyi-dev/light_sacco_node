const Dashboard = () => {
    return (
    <>
        <div class="bg-gray-100 p-6">
    <h1 class="text-2xl font-bold mb-4">Member Dashboard</h1>

    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Number</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <!-- Replace this dummy data with actual data fetched from backend -->
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">1</td>
            <td class="px-6 py-4 whitespace-nowrap">John</td>
            <td class="px-6 py-4 whitespace-nowrap">Doe</td>
            <td class="px-6 py-4 whitespace-nowrap">123456789</td>
            <td class="px-6 py-4 whitespace-nowrap">1990-01-01</td>
            <td class="px-6 py-4 whitespace-nowrap">123-456-7890</td>
            <td class="px-6 py-4 whitespace-nowrap">john@example.com</td>
            <td class="px-6 py-4 whitespace-nowrap">123 Main St, City, Country</td>
        </tr>
        <!-- End of dummy data -->
        </tbody>
    </table>
    </div>
    </>
    );
}
export Dashboard;