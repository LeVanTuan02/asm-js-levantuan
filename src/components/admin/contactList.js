import { getAll } from "../../api/contact";

const AdminContactList = {
    async render() {
        const { data } = await getAll();
        const contactList = data.sort((a, b) => b.id - a.id);

        return /* html */`
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nội dung
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            ${contactList.map((item) => /* html */`
                <tr class="item__list-item-${item.id}">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div class="text-sm font-medium text-gray-900">${item.name}</div>
                        <div class="text-sm text-gray-500">${item.email}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${item.content}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/#/admin/contact/${item.id}/detail" class="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Detail</a>
                        <button data-id="${item.id}" class="contact__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3">Delete</button>
                    </td>
                </tr>
                `).join("")}
            
        </tbody>
        `;
    },
};

export default AdminContactList;