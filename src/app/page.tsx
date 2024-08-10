import Description from "@/custome_components/fragments/introduction/descripition";
import Feature from "@/custome_components/fragments/introduction/feature";
import Started from "@/custome_components/fragments/introduction/started";

export default function Home() {
  return (
    <main className="h-fit w-full bg-dark font-poppins">
      <Started />
      <Description />
      <Feature />
    </main>
  );
}
