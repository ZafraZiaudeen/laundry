import { Eye, Edit, Trash2, MoreHorizontal } from "./Icons"

export function CategoryCard({ category, openViewModal, openEditModal, openDeleteModal }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="text-3xl mr-3">{category.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  category.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {category.status}
              </span>
            </div>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{category.itemCount} items</span>
          <span>Updated {category.updatedAt}</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => openViewModal(category)}
            className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            <Eye className="w-4 h-4 mr-1" />
            View
          </button>
          <button
            onClick={() => openEditModal(category)}
            className="flex-1 flex items-center justify-center px-3 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 text-sm"
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </button>
          <button
            onClick={() => openDeleteModal(category)}
            className="flex items-center justify-center px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}