import { useState } from "react"
import {
  Search,
  Plus,
  Download,
  Upload,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Package,
} from "../components/Icons"
import CreateCategoryForm from "../components/CreateCategoryForm"
import EditCategoryForm from "../components/EditCategoryForm"
import ListCategory from "../components/ListCategory"
import DeleteCategory from "../components/DeleteCategory"
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "@/lib/api"

export default function CategoryManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("add")
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Fetch categories
  const { data: categories = [], isLoading, error: fetchError } = useGetCategoriesQuery()

  // Mutations
  const [createCategory, { error: createError }] = useCreateCategoryMutation()
  const [updateCategory, { error: updateError }] = useUpdateCategoryMutation()
  const [deleteCategory, { error: deleteError }] = useDeleteCategoryMutation()

  // Filter categories
  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Active" && category.available) ||
      (statusFilter === "Inactive" && !category.available)
    return matchesSearch && matchesStatus
  })

  // Modal handlers
  const openAddModal = () => {
    setModalType("add")
    setSelectedCategory(null)
    setShowModal(true)
  }

  const openEditModal = (category) => {
    setModalType("edit")
    setSelectedCategory(category)
    setShowModal(true)
  }

  const openViewModal = (category) => {
    setModalType("view")
    setSelectedCategory(category)
    setShowModal(true)
  }

  const openDeleteModal = (category) => {
    setModalType("delete")
    setSelectedCategory(category)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCategory(null)
  }

  // Form submission handler
  const handleFormSubmit = async (formData) => {
    try {
      if (modalType === "add") {
        await createCategory({
          ...formData,
          processingTime: formData.processingTime.toString(), 
        }).unwrap()
      } else if (modalType === "edit") {
        await updateCategory({
          id: selectedCategory._id,
          ...formData,
          processingTime: formData.processingTime.toString(), 
        }).unwrap()
      }
      closeModal()
    } catch (error) {
     
    }
  }

  // Delete handler
  const handleDelete = async () => {
    try {
      await deleteCategory(selectedCategory._id).unwrap()
      closeModal()
    } catch (error) {
      
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Category Management</h1>
              <p className="text-gray-600">Manage your service categories and organize your offerings</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </button>
              <button
                onClick={openAddModal}
                className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent w-64"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Showing {filteredCategories.length} of {categories.length} categories
              </div>
            </div>
          </div>

          {/* Error State */}
          {fetchError && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
              {fetchError?.data?.message || "Failed to load categories"}
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading categories...</p>
            </div>
          )}

          {/* Categories Grid */}
          {!isLoading && !fetchError && filteredCategories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCategories.map((category) => (
                <div
                  key={category._id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 max-w-sm w-full overflow-hidden hover:shadow-md transition"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            category.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {category.available ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <div className="relative">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreHorizontal className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 break-words">{category.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{category.processingTime} hours</span>
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
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !fetchError && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || statusFilter !== "All"
                  ? "Try adjusting your search or filter criteria"
                  : "Get started by creating your first category"}
              </p>
              {!searchTerm && statusFilter === "All" && (
                <button
                  onClick={openAddModal}
                  className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Category
                </button>
              )}
            </div>
          )}

          {/* Bottom Spacer */}
          <div className="h-24"></div>
        </main>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            {modalType === "add" && (
              <CreateCategoryForm
                onSubmit={handleFormSubmit}
                onCancel={closeModal}
                error={createError?.data}
              />
            )}
            {modalType === "edit" && selectedCategory && (
              <EditCategoryForm
                category={selectedCategory}
                onSubmit={handleFormSubmit}
                onCancel={closeModal}
                error={updateError?.data}
              />
            )}
            {modalType === "view" && selectedCategory && (
              <ListCategory
                category={selectedCategory}
                onEdit={openEditModal}
                onClose={closeModal}
              />
            )}
            {modalType === "delete" && selectedCategory && (
              <DeleteCategory
                category={selectedCategory}
                onDelete={handleDelete}
                onCancel={closeModal}
                error={deleteError?.data}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}