import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import FormConversion from "@/custome_components/fragments/form_conversion";

export default function Conversion() {
  return (
    <div className="mt-32 h-fit bg-dark">
      <BreadcrumbCustome />

      <div className="px-7">
        <p className="mb-4 text-xl font-semibold text-white-custome">
          Conversion
        </p>

        <FormConversion />
      </div>
    </div>
  );
}
