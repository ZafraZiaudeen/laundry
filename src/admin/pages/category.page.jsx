"use client"

import { useState } from "react"
import { Download, Upload, Plus } from "../components/Icons"
import { CategoryList } from "../components/CategoryList"
import { CategoryModal } from "../components/CategoryModel"

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Wash & Fold",
      description: "Professional washing and folding services for everyday clothing",
      icon: "👕",
      status: "Active",
      itemCount: 8,
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20",
    },
    {
      id: 2,
      name: "Dry Cleaning",
      description: "Specialized dry cleaning for delicate and formal garments",
      icon: "🧥",
      status: "Active",
      itemCount: 12,
      createdAt: "2024-01-15",
      updatedAt: "2024-01-18",
    },
    {
      id: 3,
      name: "Ironing & Pressing",
      description: "Professional ironing and pressing services",
      icon: "🔥",
      status: "Active",
      itemCount: 6,
      createdAt: "2024-01-16",
      updatedAt: "2024-01-19",
    },
    {
      id: 4,
      name: "Specialty Services",
      description: "Special care for unique items and premium services",
      icon: "✨",
      status: "Inactive",
      itemCount: 4,
      createdAt: "2024-01-17",
      updatedAt: "2024-01-21",
    },
    {
      id: 5,
      name: "Bedding & Linens",
      description: "Large items like comforters, sheets, and household linens",
      icon: "🛏️",
      status: "Active",
      itemCount: 7,
      createdAt: "2024-01-18",
      updatedAt: "2024-01-22",
    },
    
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("add") // add, edit, view, delete
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "",
    status: "Active",
  })
  const [errors, setErrors] = useState({})

  // Reset form data
  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      icon: "",
      status: "Active",
    })
    setErrors({})
    setSelectedCategory(null)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (modalType === "add") {
      const newCategory = {
        id: Math.max(...categories.map((c) => c.id)) + 1,
        ...formData,
        itemCount: 0,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
      }
      setCategories([...categories, newCategory])
    } else if (modalType === "edit") {
      setCategories(
        categories.map((cat) =>
          cat.id === selectedCategory.id
            ? { ...cat, ...formData, updatedAt: new Date().toISOString().split("T")[0] }
            : cat,
        ),
      )
    }
    setShowModal(false)
    resetForm()
  }

  // Handle delete
  const handleDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== selectedCategory.id))
    setShowModal(false)
    setSelectedCategory(null)
  }

  // Modal open functions
  const openAddModal = () => {
    setModalType("add")
    resetForm()
    setShowModal(true)
  }

  const openEditModal = (category) => {
    setModalType("edit")
    setSelectedCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      icon: category.icon,
      status: category.status,
    })
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
        <main className="flex-1 overflow-y-auto p-6 pb-24">
          <CategoryList
            categories={categories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            openAddModal={openAddModal}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        </main>

        {/* Modal */}
        <CategoryModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={modalType}
          setModalType={setModalType}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          categories={categories}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          resetForm={resetForm}
        />
      </div>
    </div>
  )
}