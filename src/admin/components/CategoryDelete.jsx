import { AlertTriangle, X } from "./Icons"

export function CategoryDelete({ category, setShowModal, handleDelete }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <AlertTriangle className="h-6 w-6 text-red-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Category</h3>
      <p className="text-gray-500 mb-4">
        Are you sure you want to delete "{category.name}"? This action cannot be undone and will affect {category.itemCount} items.
      </p>
      <div className="flex space-x-3">
        <button
          onClick={() => setShowModal(false)}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  )
}