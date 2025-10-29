export default function CallToAction() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-r from-vital-light-blue to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-vital-dark-gray mb-4 font-gilroy">
          Join VitalSwap Today
        </h2>
        <p className="text-xl text-vital-gray mb-8 font-poppins">
          Get started with a plan that suits your needs.
        </p>
        <button className="bg-vital-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-vital-blue-hover transition-colors font-poppins">
          Join via VitalSwap
        </button>
      </div>
    </section>
  );
}
