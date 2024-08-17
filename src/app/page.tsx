import Description from "@/custome_components/layouts/introduction/descripition";
import Feature from "@/custome_components/layouts/introduction/feature";
import Started from "@/custome_components/layouts/introduction/started";

export default function Home() {
  return (
    <main className="h-fit w-full overflow-hidden bg-dark font-poppins">
      <Started />
      <Description />
      <Feature />
    </main>
  );
}
