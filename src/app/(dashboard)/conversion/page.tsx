import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import FormConversion from "@/custome_components/fragments/form_conversion";

export default function Conversion() {
  return (
    <div className="relative mt-32 h-full bg-dark pb-10 md:ml-56 md:mt-0 md:h-[93.5%]">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />
      <div className="px-7 md:mt-5">
        <p className="mb-4 text-xl font-semibold text-white-custome">
          Conversion
        </p>

        <FormConversion />
      </div>
    </div>
  );
}
