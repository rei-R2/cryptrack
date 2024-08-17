import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ConversionInput from "@/custome_components/fragments/conversion_input";

export default function Conversion() {
  return (
    <div className="mt-32 h-fit bg-dark">
      <BreadcrumbCustome />

      <div className="px-7">
        <p className="mb-4 text-xl font-semibold text-white-custome">
          Conversion
        </p>

        <ConversionInput />
      </div>
    </div>
  );
}
