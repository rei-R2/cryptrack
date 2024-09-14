"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { conversionCurrency } from "@/utils/crypto";
import { DataConversion } from "@/typs";
import { useState } from "react";
import { formatCurrency, formatDate } from "@/utils/formatData";

const formSchema = z.object({
  amount: z.coerce.number().positive(),
  symbol: z
    .string()
    .length(3, { message: "Must be exactly 3 characters long" })
    .toUpperCase(),
});

export default function FormConversion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [dataConversion, setDataConversion] = useState<DataConversion[]>([]);

  const { control, handleSubmit } = form;

  const handleSubmitForm = handleSubmit(async (value) => {
    const result = await conversionCurrency(value);
    result && setDataConversion(result);
  });

  return (
    <div className="w-full overflow-hidden md:h-[85vh] lg:flex lg:gap-x-10">
      <Form {...form}>
        <form onSubmit={handleSubmitForm} className="w-full lg:w-96">
          <div className="flex w-full justify-center gap-x-4">
            <FormField
              control={control}
              name="amount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-light-gray-2">amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="$1000"
                      className="mb-4 w-full rounded-none border-none bg-light-gray-1 text-white-custome focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>currency in USD</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="symbol"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-light-gray-2">symbol</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="BTC"
                      className="mb-4 w-full rounded-none border-none bg-light-gray-1 text-white-custome focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>symbol cryptocurrency</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="mt-5 w-full rounded-none bg-light-green font-semibold text-dark hover:bg-light-green/80"
          >
            convert
          </Button>
        </form>
      </Form>

      <div className="overflow-y-auto py-8 md:h-[71vh] lg:h-[79vh] lg:w-[60%] lg:py-2">
        {dataConversion.length > 0 && (
          <div className="flex h-fit w-full flex-wrap items-start gap-5 md:overflow-y-auto">
            {dataConversion.map((data) => (
              <div
                key={data.id}
                className="flex h-32 w-full flex-col justify-between rounded-md bg-light-gray-1 md:w-[48%]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <p className="w-full text-center text-2xl font-semibold text-light-gray-2">
                    {formatCurrency(data.quote.USD.price, "USD")}
                  </p>

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-tr-md bg-light-green">
                    <p className="text-base font-semibold text-dark">
                      {data.symbol}
                    </p>
                    <div className="absolute right-full top-0 h-20 w-0.5 bg-dark" />
                    <div className="absolute right-0 top-full h-0.5 w-40 bg-dark" />
                  </div>
                </div>

                <div className="flex justify-evenly pb-5">
                  <div className="flex items-end gap-x-2 md:flex-col md:items-center lg:flex-row">
                    <p className="text-xs text-light-gray-2">name</p>
                    <p className="text-nowrap text-xs text-white-custome">
                      {data.name}
                    </p>
                  </div>
                  <div className="flex items-end gap-x-2 md:flex-col md:items-center lg:flex-row">
                    <p className="text-xs text-light-gray-2">update</p>
                    <p className="text-nowrap text-xs text-white-custome">
                      {formatDate(data.last_updated)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
