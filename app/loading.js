export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#5c4033] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Majestic Group...</p>
        </div>
      </div>
    )
  }