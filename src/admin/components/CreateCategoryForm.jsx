import { useState } from "react"
import { Save, X } from "./Icons"

export default function CreateCategoryForm({ onSubmit, onCancel, error }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    processingTime: "",
    available: true,
  })
  const [errors, setErrors] = useState({})

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
    if (!formData.processingTime) {
      newErrors.processingTime = "Processing time is required"
    } else if (isNaN(formData.processingTime) || formData.processingTime <= 0) {
      newErrors.processingTime = "Processing time must be a positive number"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({
        name: formData.name,
        description: formData.description,
        processingTime:formData.processingTime,
        available: formData.available,
      })
    }
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "available" ? value === "true" : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Add New Category</h2>
        <button onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error.message || "An error occurred while creating the category"}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Processing Time (hours) *</label>
            <input
              type="number"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                errors.processingTime ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Enter processing time"
            />
            {errors.processingTime && <p className="text-red-500 text-xs mt-1">{errors.processingTime}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              name="available"
              value={formData.available.toString()}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}