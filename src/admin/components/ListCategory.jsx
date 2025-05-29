import { Edit, X } from "./Icons"

export default function ListCategory({ category, onEdit, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Category Details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                category.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {category.available ? "Active" : "Inactive"}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <p className="text-gray-600 break-words">{category.description}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Processing Time</label>
            <p className="text-gray-600">{category.processingTime} hours</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <p className="text-gray-600">{category.available ? "Active" : "Inactive"}</p>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={() => onEdit(category)}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Category
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}