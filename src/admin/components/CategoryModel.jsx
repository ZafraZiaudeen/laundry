import { CategoryForm } from "./CategoryForm"
import { CategoryView } from "./CategoryView"
import { CategoryDelete } from "./CategoryDelete"
import { X } from "./Icons"

export function CategoryModal({
  showModal,
  setShowModal,
  modalType,
  setModalType,
  selectedCategory,
  setSelectedCategory,
  formData,
  setFormData,
  errors,
  setErrors,
  categories,
  handleSubmit,
  handleDelete,
  resetForm,
}) {
  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {modalType === "add" && "Add New Category"}
            {modalType === "edit" && "Edit Category"}
            {modalType === "view" && "Category Details"}
            {modalType === "delete" && "Delete Category"}
          </h2>
          <button
            onClick={() => {
              setShowModal(false)
              resetForm()
              setSelectedCategory(null)
            }}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {(modalType === "add" || modalType === "edit") && (
            <CategoryForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              modalType={modalType}
              handleSubmit={handleSubmit}
              resetForm={resetForm}
              setShowModal={setShowModal}
              categories={categories}
              selectedCategory={selectedCategory}
            />
          )}
          {modalType === "view" && selectedCategory && (
            <CategoryView category={selectedCategory} setShowModal={setShowModal} setModalType={setModalType} />
          )}
          {modalType === "delete" && selectedCategory && (
            <CategoryDelete category={selectedCategory} setShowModal={setShowModal} handleDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  )
}