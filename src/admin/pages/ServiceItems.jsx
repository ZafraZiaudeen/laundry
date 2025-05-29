import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  X,
  Save,
  AlertTriangle,
  Package,
  Filter,
  Download,
  Upload,
  ArrowLeft,
  DollarSign,
  Clock,
  Star,
  Copy,
  ToggleLeft,
  ToggleRight,
  Image as ImageIcon,
} from "../components/Icons"

export default function ServiceItemsManagement() {
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get("categoryId")

  // Sample categories data
  const categories = [
    { id: 1, name: "Wash & Fold", icon: "👕" },
    { id: 2, name: "Dry Cleaning", icon: "🧥" },
    { id: 3, name: "Ironing & Pressing", icon: "🔥" },
    { id: 4, name: "Specialty Services", icon: "✨" },
    { id: 5, name: "Bedding & Linens", icon: "🛏️" },
  ]

  const serviceTemplates = [
    {
      name: "Basic Wash Item",
      description: "Standard washing service for everyday items",
      price: "2.99",
      turnaround: "24-48 hours",
      unit: "piece",
      tags: "basic, everyday, affordable",
    },
    {
      name: "Premium Dry Clean",
      description: "Premium dry cleaning service for delicate items",
      price: "12.99",
      turnaround: "48-72 hours",
      unit: "piece",
      tags: "premium, delicate, professional",
    },
    {
      name: "Express Service",
      description: "Fast turnaround service for urgent items",
      price: "8.99",
      turnaround: "12-24 hours",
      unit: "piece",
      tags: "express, fast, urgent",
    },
  ]

  // Sample service items data
  const [serviceItems, setServiceItems] = useState([
    {
      id: 1,
      categoryId: 1,
      name: "Regular Clothes (per lb)",
      description: "Everyday clothing items washed and neatly folded with premium detergent",
      price: 1.99,
      originalPrice: 2.49,
      turnaround: "24-48 hours",
      status: "Active",
      popular: true,
      featured: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      tags: ["everyday", "affordable", "quick"],
      minQuantity: 1,
      maxQuantity: 50,
      unit: "lb",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Delicate Items (per piece)",
      description: "Special care for delicate fabrics and garments requiring gentle handling",
      price: 3.5,
      originalPrice: null,
      turnaround: "48-72 hours",
      status: "Active",
      popular: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop",
      tags: ["delicate", "premium", "careful"],
      minQuantity: 1,
      maxQuantity: 20,
      unit: "piece",
      createdAt: "2024-01-16",
      updatedAt: "2024-01-19",
    },
    {
      id: 3,
      categoryId: 2,
      name: "Dress Shirts/Blouses",
      description: "Professional cleaning and pressing for dress shirts and blouses",
      price: 6.5,
      originalPrice: 7.99,
      turnaround: "24-48 hours",
      status: "Active",
      popular: true,
      featured: false,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=200&fit=crop",
      tags: ["professional", "business", "crisp"],
      minQuantity: 1,
      maxQuantity: 30,
      unit: "piece",
      createdAt: "2024-01-17",
      updatedAt: "2024-01-21",
    },
    {
      id: 4,
      categoryId: 1,
      name: "Bed Sheets Set",
      description: "Complete bed sheet set including pillowcases, fitted and flat sheets",
      price: 15.0,
      originalPrice: null,
      turnaround: "24-48 hours",
      status: "Inactive",
      popular: false,
      featured: false,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop",
      tags: ["bedding", "complete", "fresh"],
      minQuantity: 1,
      maxQuantity: 10,
      unit: "set",
      createdAt: "2024-01-18",
      updatedAt: "2024-01-22",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState(categoryId ? Number.parseInt(categoryId) : "All")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("add") // add, edit, view, delete, duplicate
  const [selectedItem, setSelectedItem] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    turnaround: "24-48 hours",
    status: "Active",
    popular: false,
    featured: false,
    image: "",
    tags: "",
    minQuantity: 1,
    maxQuantity: 100,
    unit: "piece",
    categoryId: selectedCategory !== "All" ? selectedCategory : 1,
  })
  const [errors, setErrors] = useState({})

  const [selectedItems, setSelectedItems] = useState([])
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [draggedItem, setDraggedItem] = useState(null)
  const [showTemplates, setShowTemplates] = useState(false)

  // Enhanced filtering and sorting
  const filteredAndSortedItems = serviceItems
    .filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesStatus = statusFilter === "All" || item.status === statusFilter
      const matchesCategory = selectedCategory === "All" || item.categoryId === selectedCategory

      return matchesSearch && matchesStatus && matchesCategory
    })
    .sort((a, b) => {
      let aValue = a[sortField]
      let bValue = b[sortField]

      if (sortField === "price") {
        aValue = Number(aValue)
        bValue = Number(bValue)
      } else if (sortField === "category") {
        aValue = getCategoryName(a.categoryId)
        bValue = getCategoryName(b.categoryId)
      } else if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredAndSortedItems.slice(startIndex, startIndex + itemsPerPage)

  // Get category name
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category ? category.name : "Unknown"
  }

  // Reset form data
  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      turnaround: "24-48 hours",
      status: "Active",
      popular: false,
      featured: false,
      image: "",
      tags: "",
      minQuantity: 1,
      maxQuantity: 100,
      unit: "piece",
      categoryId: selectedCategory !== "All" ? selectedCategory : 1,
    })
    setErrors({})
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Service name is required"
    } else if (formData.name.length < 3) {
      newErrors.name = "Service name must be at least 3 characters"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Valid price is required"
    }

    if (formData.originalPrice && formData.originalPrice <= formData.price) {
      newErrors.originalPrice = "Original price must be higher than current price"
    }

    if (!formData.turnaround.trim()) {
      newErrors.turnaround = "Turnaround time is required"
    }

    if (formData.minQuantity < 1) {
      newErrors.minQuantity = "Minimum quantity must be at least 1"
    }

    if (formData.maxQuantity < formData.minQuantity) {
      newErrors.maxQuantity = "Maximum quantity must be greater than minimum"
    }

    // Check for duplicate names within the same category
    const isDuplicate = serviceItems.some(
      (item) =>
        item.name.toLowerCase() === formData.name.toLowerCase() &&
        item.categoryId === Number.parseInt(formData.categoryId) &&
        (modalType === "add" || item.id !== selectedItem?.id),
    )

    if (isDuplicate) {
      newErrors.name = "Service name already exists in this category"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const processedData = {
      ...formData,
      price: Number.parseFloat(formData.price),
      originalPrice: formData.originalPrice ? Number.parseFloat(formData.originalPrice) : null,
      categoryId: Number.parseInt(formData.categoryId),
      minQuantity: Number.parseInt(formData.minQuantity),
      maxQuantity: Number.parseInt(formData.maxQuantity),
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    }

    if (modalType === "add" || modalType === "duplicate") {
      const newItem = {
        id: Math.max(...serviceItems.map((item) => item.id)) + 1,
        ...processedData,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
      }
      setServiceItems([...serviceItems, newItem])
    } else if (modalType === "edit") {
      setServiceItems(
        serviceItems.map((item) =>
          item.id === selectedItem.id
            ? { ...item, ...processedData, updatedAt: new Date().toISOString().split("T")[0] }
            : item,
        ),
      )
    }

    setShowModal(false)
    resetForm()
    setSelectedItem(null)
  }

  // Handle delete
  const handleDelete = () => {
    setServiceItems(serviceItems.filter((item) => item.id !== selectedItem.id))
    setShowModal(false)
    setSelectedItem(null)
  }

  // Toggle status
  const toggleStatus = (item) => {
    setServiceItems(
      serviceItems.map((serviceItem) =>
        serviceItem.id === item.id
          ? {
              ...serviceItem,
              status: serviceItem.status === "Active" ? "Inactive" : "Active",
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : serviceItem,
      ),
    )
  }

  // Toggle popular
  const togglePopular = (item) => {
    setServiceItems(
      serviceItems.map((serviceItem) =>
        serviceItem.id === item.id
          ? {
              ...serviceItem,
              popular: !serviceItem.popular,
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : serviceItem,
      ),
    )
  }

  // Open modal functions
  const openAddModal = () => {
    setModalType("add")
    resetForm()
    setShowModal(true)
  }

  const openEditModal = (item) => {
    setModalType("edit")
    setSelectedItem(item)
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      originalPrice: item.originalPrice ? item.originalPrice.toString() : "",
      turnaround: item.turnaround,
      status: item.status,
      popular: item.popular,
      featured: item.featured,
      image: item.image,
      tags: item.tags.join(", "),
      minQuantity: item.minQuantity,
      maxQuantity: item.maxQuantity,
      unit: item.unit,
      categoryId: item.categoryId,
    })
    setShowModal(true)
  }

  const openViewModal = (item) => {
    setModalType("view")
    setSelectedItem(item)
    setShowModal(true)
  }

  const openDeleteModal = (item) => {
    setModalType("delete")
    setSelectedItem(item)
    setShowModal(true)
  }

  const openDuplicateModal = (item) => {
    setModalType("duplicate")
    setSelectedItem(item)
    setFormData({
      name: `${item.name} (Copy)`,
      description: item.description,
      price: item.price.toString(),
      originalPrice: item.originalPrice ? item.originalPrice.toString() : "",
      turnaround: item.turnaround,
      status: "Inactive",
      popular: false,
      featured: false,
      image: item.image,
      tags: item.tags.join(", "),
      minQuantity: item.minQuantity,
      maxQuantity: item.maxQuantity,
      unit: item.unit,
      categoryId: item.categoryId,
    })
    setShowModal(true)
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Bulk operations
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(paginatedItems.map((item) => item.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (itemId, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId])
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId))
    }
  }

  const handleBulkStatusChange = (newStatus) => {
    setLoading(true)
    setTimeout(() => {
      setServiceItems(
        serviceItems.map((item) =>
          selectedItems.includes(item.id)
            ? { ...item, status: newStatus, updatedAt: new Date().toISOString().split("T")[0] }
            : item,
        ),
      )
      setSelectedItems([])
      setShowBulkActions(false)
      setLoading(false)
    }, 1000)
  }

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} items?`)) {
      setServiceItems(serviceItems.filter((item) => !selectedItems.includes(item.id)))
      setSelectedItems([])
      setShowBulkActions(false)
    }
  }

  // Sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Template application
  const applyTemplate = (template) => {
    setFormData({
      ...formData,
      ...template,
      categoryId: selectedCategory !== "All" ? selectedCategory : 1,
    })
    setShowTemplates(false)
  }

  // Export functionality
  const handleExport = () => {
    const csvContent = [
      ["Name", "Category", "Price", "Status", "Turnaround", "Tags"].join(","),
      ...filteredAndSortedItems.map((item) =>
        [
          item.name,
          getCategoryName(item.categoryId),
          item.price,
          item.status,
          item.turnaround,
          item.tags.join(";"),
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "service-items.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => window.history.back()} className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Service Items Management</h1>
                <p className="text-gray-600">Manage individual services and their pricing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleExport}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Export ({filteredAndSortedItems.length})
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
                Add Service Item
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Enhanced Filters and Bulk Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent w-64"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) =>
                      setSelectedCategory(e.target.value === "All" ? "All" : Number.parseInt(e.target.value))
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
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

                {/* Items per page */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Show:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value))
                      setCurrentPage(1)
                    }}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {selectedItems.length > 0 && (
                  <div className="flex items-center space-x-2 mr-4">
                    <span className="text-sm text-gray-600">{selectedItems.length} selected</span>
                    <button
                      onClick={() => setShowBulkActions(!showBulkActions)}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm hover:bg-blue-200"
                    >
                      Bulk Actions
                    </button>
                  </div>
                )}

                <div className="text-sm text-gray-500">
                  Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAndSortedItems.length)} of{" "}
                  {filteredAndSortedItems.length}
                </div>
              </div>
            </div>

            {/* Bulk Actions Panel */}
            {showBulkActions && selectedItems.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-blue-900">Bulk Actions:</span>
                  <button
                    onClick={() => handleBulkStatusChange("Active")}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                    disabled={loading}
                  >
                    Activate
                  </button>
                  <button
                    onClick={() => handleBulkStatusChange("Inactive")}
                    className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                    disabled={loading}
                  >
                    Deactivate
                  </button>
                  <button
                    onClick={handleBulkDelete}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                    disabled={loading}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItems([])
                      setShowBulkActions(false)
                    }}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Service Items Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === paginatedItems.length && paginatedItems.length > 0}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center">
                        Service
                        {sortField === "name" && <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("category")}
                    >
                      <div className="flex items-center">
                        Category
                        {sortField === "category" && (
                          <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("price")}
                    >
                      <div className="flex items-center">
                        Price
                        {sortField === "price" && <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Turnaround
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort("status")}
                    >
                      <div className="flex items-center">
                        Status
                        {sortField === "status" && <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Badges
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-12 text-center">
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
                          <span className="ml-2 text-gray-500">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedItems.map((item) => (
                      <tr
                        key={item.id}
                        className={`hover:bg-gray-50 ${selectedItems.includes(item.id) ? "bg-blue-50" : ""}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)}
                            onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover mr-4"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500 max-w-xs truncate">{item.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{getCategoryName(item.categoryId)}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</span>
                            {item.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                            <span className="ml-1 text-xs text-gray-500">/{item.unit}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">{item.turnaround}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleStatus(item)}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.status === "Active" ? (
                              <ToggleRight className="w-3 h-3 mr-1" />
                            ) : (
                              <ToggleLeft className="w-3 h-3 mr-1" />
                            )}
                            {item.status}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-1">
                            {item.popular && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                            {item.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => openViewModal(item)}
                              className="text-gray-400 hover:text-gray-600"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openEditModal(item)}
                              className="text-sky-600 hover:text-sky-900"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openDuplicateModal(item)}
                              className="text-blue-600 hover:text-blue-900"
                              title="Duplicate"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => togglePopular(item)}
                              className={`${item.popular ? "text-orange-600" : "text-gray-400"} hover:text-orange-900`}
                              title="Toggle Popular"
                            >
                              <Star className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openDeleteModal(item)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                      <span className="font-medium">
                        {Math.min(startIndex + itemsPerPage, filteredAndSortedItems.length)}
                      </span>{" "}
                      of <span className="font-medium">{filteredAndSortedItems.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1
                        if (page === 1 || page === totalPages || (page >= currentPage - 2 && page <= currentPage + 2)) {
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                page === currentPage
                                  ? "z-10 bg-sky-50 border-sky-500 text-sky-600"
                                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                              }`}
                            >
                              {page}
                            </button>
                          )
                        } else if (page === currentPage - 3 || page === currentPage + 3) {
                          return (
                            <span
                              key={page}
                              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                            >
                              ...
                            </span>
                          )
                        }
                        return null
                      })}
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Empty State */}
          {filteredAndSortedItems.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No service items found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || statusFilter !== "All" || selectedCategory !== "All"
                  ? "Try adjusting your search or filter criteria"
                  : "Get started by creating your first service item"}
              </p>
              {!searchTerm && statusFilter === "All" && selectedCategory === "All" && (
                <button
                  onClick={openAddModal}
                  className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Service Item
                </button>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                {modalType === "add" && "Add New Service Item"}
                {modalType === "edit" && "Edit Service Item"}
                {modalType === "view" && "Service Item Details"}
                {modalType === "delete" && "Delete Service Item"}
                {modalType === "duplicate" && "Duplicate Service Item"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false)
                  resetForm()
                  setSelectedItem(null)
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {(modalType === "add" || modalType === "duplicate") && (
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => setShowTemplates(!showTemplates)}
                    className="text-sm text-sky-600 hover:text-sky-800 flex items-center"
                  >
                    <Package className="w-4 h-4 mr-1" />
                    Use Template
                  </button>

                  {showTemplates && (
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                      {serviceTemplates.map((template, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => applyTemplate(template)}
                          className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                        >
                          <div className="font-medium text-sm">{template.name}</div>
                          <div className="text-xs text-gray-500">${template.price}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {(modalType === "add" || modalType === "edit" || modalType === "duplicate") && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.name ? "border-red-300" : "border-gray-300"
                        }`}
                        placeholder="Enter service name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.description ? "border-red-300" : "border-gray-300"
                        }`}
                        placeholder="Enter service description"
                      />
                      {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.icon} {category.name}
                          </option>
                        ))}
                      </select>
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                      <div className="relative">
                        <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          step="0.01"
                          min="0"
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                            errors.price ? "border-red-300" : "border-gray-300"
                          }`}
                          placeholder="0.00"
                        />
                      </div>
                      {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                      <div className="relative">
                        <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="number"
                          name="originalPrice"
                          value={formData.originalPrice}
                          onChange={handleInputChange}
                          step="0.01"
                          min="0"
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                            errors.originalPrice ? "border-red-300" : "border-gray-300"
                          }`}
                          placeholder="0.00"
                        />
                      </div>
                      {errors.originalPrice && <p className="text-red-500 text-xs mt-1">{errors.originalPrice}</p>}
                      <p className="text-gray-500 text-xs mt-1">Leave empty if no discount</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                      <select
                        name="unit"
                        value={formData.unit}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      >
                        <option value="piece">per piece</option>
                        <option value="lb">per lb</option>
                        <option value="set">per set</option>
                        <option value="item">per item</option>
                        <option value="load">per load</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Turnaround Time *</label>
                      <input
                        type="text"
                        name="turnaround"
                        value={formData.turnaround}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.turnaround ? "border-red-300" : "border-gray-300"
                        }`}
                        placeholder="e.g., 24-48 hours"
                      />
                      {errors.turnaround && <p className="text-red-500 text-xs mt-1">{errors.turnaround}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Min Quantity</label>
                      <input
                        type="number"
                        name="minQuantity"
                        value={formData.minQuantity}
                        onChange={handleInputChange}
                        min="1"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.minQuantity ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                      {errors.minQuantity && <p className="text-red-500 text-xs mt-1">{errors.minQuantity}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Quantity</label>
                      <input
                        type="number"
                        name="maxQuantity"
                        value={formData.maxQuantity}
                        onChange={handleInputChange}
                        min="1"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.maxQuantity ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                      {errors.maxQuantity && <p className="text-red-500 text-xs mt-1">{errors.maxQuantity}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                      <div className="relative">
                        <ImageIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="url"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="e.g., premium, quick, delicate (comma separated)"
                      />
                      <p className="text-gray-500 text-xs mt-1">Separate tags with commas</p>
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="popular"
                            checked={formData.popular}
                            onChange={handleInputChange}
                            className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Mark as Popular</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="featured"
                            checked={formData.featured}
                            onChange={handleInputChange}
                            className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Mark as Featured</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false)
                        resetForm()
                        setSelectedItem(null)
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
                      {modalType === "add" ? "Create" : modalType === "duplicate" ? "Duplicate" : "Update"}
                    </button>
                  </div>
                </form>
              )}

              {modalType === "view" && selectedItem && (
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>
                      <p className="text-gray-600 mb-2">{selectedItem.description}</p>
                      <div className="flex items-center space-x-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            selectedItem.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {selectedItem.status}
                        </span>
                        {selectedItem.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                        {selectedItem.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <p className="text-gray-600">{getCategoryName(selectedItem.categoryId)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <div className="flex items-center">
                        <span className="text-lg font-semibold">${selectedItem.price.toFixed(2)}</span>
                        {selectedItem.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${selectedItem.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="ml-1 text-sm text-gray-500">/{selectedItem.unit}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Turnaround Time</label>
                      <p className="text-gray-600">{selectedItem.turnaround}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Range</label>
                      <p className="text-gray-600">
                        {selectedItem.minQuantity} - {selectedItem.maxQuantity} {selectedItem.unit}
                      </p>
                    </div>
                  </div>

                  {selectedItem.tags.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div>
                      <label className="block font-medium mb-1">Created</label>
                      <p>{selectedItem.createdAt}</p>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Last Updated</label>
                      <p>{selectedItem.updatedAt}</p>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={() => {
                        setShowModal(false)
                        setSelectedItem(null)
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => openEditModal(selectedItem)}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Service
                    </button>
                  </div>
                </div>
              )}

              {modalType === "delete" && selectedItem && (
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Service Item</h3>
                  <p className="text-gray-500 mb-4">
                    Are you sure you want to delete "{selectedItem.name}"? This action cannot be undone and will remove
                    this service from all customer-facing pages.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setShowModal(false)
                        setSelectedItem(null)
                      }}
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
