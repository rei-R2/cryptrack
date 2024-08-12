"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbCustome() {
  const pathname = usePathname();
  const links = pathname.split("/").slice(1);
  const href: string[] = [];

  for (let i = 0; i < links.length; i++) {
    if (i % 2 === 0) {
      links.splice(i, 0, "/");
    }
  }

  for (let i = 0; i < links.length + 1; i++) {
    if (i % 2 === 0 && i !== 0) {
      const slice = links.slice(0, i);
      href.push(slice.join(""));
    }
  }

  return (
    <Breadcrumb className="mb-4 px-7">
      <BreadcrumbList>
        {links.slice(1).map((value, i) =>
          value !== "/" ? (
            <BreadcrumbItem key={i}>
              <BreadcrumbLink
                href={`${href[i / 2]}`}
                className="hover:text-inherit"
              >
                {value}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbSeparator key={i} />
          ),
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
