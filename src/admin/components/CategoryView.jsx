import { Edit, X } from "./Icons"

export function CategoryView({ category, setShowModal, setModalType }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{category.icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{category.name}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              category.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {category.status}
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Items Count</label>
          <p className="text-gray-600">{category.itemCount}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <p className="text-gray-600">{category.status}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Created</label>
          <p className="text-gray-600">{category.createdAt}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Updated</label>
          <p className="text-gray-600">{category.updatedAt}</p>
        </div>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          onClick={() => setShowModal(false)}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Close
        </button>
        <button
          onClick={() => setModalType("edit")}
          className="flex-1 flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Category
        </button>
      </div>
    </div>
  )
}