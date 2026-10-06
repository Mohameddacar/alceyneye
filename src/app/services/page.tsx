export default function Services() {
  return (
    <div className="py-24 bg-white min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-[var(--color-brand-dark)] mb-6">Our Services</h1>
      <p className="text-xl text-gray-600 max-w-2xl px-4 mb-12">
        From comprehensive eye exams to custom lens fitting, we offer a full range of optical services to meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4 w-full">
        <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
           <h3 className="text-xl font-bold text-[var(--color-brand-dark)] mb-3">Eye Exams</h3>
           <p className="text-gray-600">State of the art equipment for accurate vision testing.</p>
        </div>
        <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
           <h3 className="text-xl font-bold text-[var(--color-brand-dark)] mb-3">Lens Fitting</h3>
           <p className="text-gray-600">Custom fitted lenses for your lifestyle and needs.</p>
        </div>
        <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
           <h3 className="text-xl font-bold text-[var(--color-brand-dark)] mb-3">Frame Styling</h3>
           <p className="text-gray-600">Expert assistance in choosing the perfect frame for your face shape.</p>
        </div>
      </div>
    </div>
  );
}
