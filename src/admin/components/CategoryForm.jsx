import { Save, X } from "./Icons"

export function CategoryForm({ formData, setFormData, errors, setErrors, modalType, handleSubmit, resetForm, setShowModal, categories, selectedCategory }) {
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Category name is required"
    } else if (formData.name.length < 3) {
      newErrors.name = "Category name must be at least 3 characters"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    if (!formData.icon.trim()) {
      newErrors.icon = "Icon is required"
    }

    // Check for duplicate names (excluding current category when editing)
    const isDuplicate = categories.some(
      (cat) =>
        cat.name.toLowerCase() === formData.name.toLowerCase() &&
        (modalType === "add" || cat.id !== selectedCategory?.id),
    )

    if (isDuplicate) {
      newErrors.name = "Category name already exists"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Category Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
            errors.name ? "border-red-300" : "border-gray-300"
          }`}
          placeholder="Enter category name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
            errors.description ? "border-red-300" : "border-gray-300"
          }`}
          placeholder="Enter category description"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Icon *</label>
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
            errors.icon ? "border-red-300" : "border-gray-300"
          }`}
          placeholder="Enter emoji or icon"
        />
        {errors.icon && <p className="text-red-500 text-xs mt-1">{errors.icon}</p>}
        <p className="text-gray-500 text-xs mt-1">Use an emoji or icon to represent this category</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          type="button"
          onClick={() => {
            setShowModal(false)
            resetForm()
          }}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
        >
          <Save className="w-4 h-4 mr-2" />
          {modalType === "add" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  )
}