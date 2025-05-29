import { Search, Filter, Download, Upload, Plus, Package } from "./Icons"
import { CategoryCard } from "./CategoryCard"

export function CategoryList({
  categories,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  openAddModal,
  openViewModal,
  openEditModal,
  openDeleteModal,
}) {
  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || category.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <>
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

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
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
    </>
  )
}