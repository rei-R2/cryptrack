"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectCurrencyMetrics() {
  const [select, setSelect] = useState<string>("");
  const pathName = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    push(`${pathName}?currency=${select}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  return (
    <Select onValueChange={(value) => setSelect(value)}>
      <SelectTrigger className="w-full rounded-none border-none bg-light-gray-1 text-light-gray-2">
        <SelectValue
          placeholder="choose currency"
          className="text-light-gray-2"
        />
      </SelectTrigger>
      <SelectContent className="border-dark bg-light-gray-1 text-light-gray-2">
        <SelectItem value="USD">United States Dollar ($)</SelectItem>
        <SelectItem value="ALL">Albanian Lek (L)</SelectItem>
        <SelectItem value="DZD">Algerian Dinar (د.ج)</SelectItem>
        <SelectItem value="ARS">Argentine Peso ($)</SelectItem>
        <SelectItem value="AMD">Armenian Dram (֏)</SelectItem>
        <SelectItem value="AUD">Australian Dollar ($)</SelectItem>
        <SelectItem value="AZN">Azerbaijani Manat (₼)</SelectItem>
        <SelectItem value="BHD">Bahraini Dinar (.د.ب)</SelectItem>
        <SelectItem value="BDT">Bangladeshi Taka (৳)</SelectItem>
        <SelectItem value="BYN">Belarusian Ruble (Br)</SelectItem>
        <SelectItem value="BMD">Bermudan Dollar ($)</SelectItem>
        <SelectItem value="BOB">Bolivian Boliviano (Bs.)</SelectItem>
        <SelectItem value="BAM">
          Bosnia-Herzegovina Convertible Mark (KM)
        </SelectItem>
        <SelectItem value="BRL">Brazilian Real (R$)</SelectItem>
        <SelectItem value="BGN">Bulgarian Lev (лв)</SelectItem>
        <SelectItem value="KHR">Cambodian Riel (៛)</SelectItem>
        <SelectItem value="CAD">Canadian Dollar ($)</SelectItem>
        <SelectItem value="CLP">Chilean Peso ($)</SelectItem>
        <SelectItem value="CNY">Chinese Yuan (¥)</SelectItem>
        <SelectItem value="COP">Colombian Peso ($)</SelectItem>
        <SelectItem value="CRC">Costa Rican Colón (₡)</SelectItem>
        <SelectItem value="HRK">Croatian Kuna (kn)</SelectItem>
        <SelectItem value="CUP">Cuban Peso ($)</SelectItem>
        <SelectItem value="CZK">Czech Koruna (Kč)</SelectItem>
        <SelectItem value="DKK">Danish Krone (kr)</SelectItem>
        <SelectItem value="DOP">Dominican Peso ($)</SelectItem>
        <SelectItem value="EGP">Egyptian Pound (£)</SelectItem>
        <SelectItem value="EUR">Euro (€)</SelectItem>
        <SelectItem value="GEL">Georgian Lari (₾)</SelectItem>
        <SelectItem value="GHS">Ghanaian Cedi (₵)</SelectItem>
        <SelectItem value="GTQ">Guatemalan Quetzal (Q)</SelectItem>
        <SelectItem value="HNL">Honduran Lempira (L)</SelectItem>
        <SelectItem value="HKD">Hong Kong Dollar ($)</SelectItem>
        <SelectItem value="HUF">Hungarian Forint (Ft)</SelectItem>
        <SelectItem value="ISK">Icelandic Króna (kr)</SelectItem>
        <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
        <SelectItem value="IDR">Indonesian Rupiah (Rp)</SelectItem>
        <SelectItem value="IRR">Iranian Rial (﷼)</SelectItem>
        <SelectItem value="IQD">Iraqi Dinar (ع.د)</SelectItem>
        <SelectItem value="JMD">Jamaican Dollar ($)</SelectItem>
        <SelectItem value="JPY">Japanese Yen (¥)</SelectItem>
        <SelectItem value="JOD">Jordanian Dinar (د.ا)</SelectItem>
        <SelectItem value="KES">Kenyan Shilling (Sh)</SelectItem>
        <SelectItem value="KWD">Kuwaiti Dinar (د.ك)</SelectItem>
        <SelectItem value="KGS">Kyrgystani Som (с)</SelectItem>
        <SelectItem value="LBP">Lebanese Pound (ل.ل)</SelectItem>
        <SelectItem value="MKD">Macedonian Denar (ден)</SelectItem>
        <SelectItem value="MYR">Malaysian Ringgit (RM)</SelectItem>
        <SelectItem value="MUR">Mauritian Rupee (₨)</SelectItem>
        <SelectItem value="MXN">Mexican Peso ($)</SelectItem>
        <SelectItem value="MDL">Moldovan Leu (L)</SelectItem>
        <SelectItem value="MNT">Mongolian Tugrik (₮)</SelectItem>
        <SelectItem value="MAD">Moroccan Dirham (د.م.)</SelectItem>
        <SelectItem value="MMK">Myanma Kyat (Ks)</SelectItem>
        <SelectItem value="NAD">Namibian Dollar ($)</SelectItem>
        <SelectItem value="NPR">Nepalese Rupee (₨)</SelectItem>
        <SelectItem value="TWD">New Taiwan Dollar (NT$)</SelectItem>
        <SelectItem value="NZD">New Zealand Dollar ($)</SelectItem>
        <SelectItem value="NIO">Nicaraguan Córdoba (C$)</SelectItem>
        <SelectItem value="NGN">Nigerian Naira (₦)</SelectItem>
        <SelectItem value="NOK">Norwegian Krone (kr)</SelectItem>
        <SelectItem value="OMR">Omani Rial (ر.ع.)</SelectItem>
        <SelectItem value="PKR">Pakistani Rupee (₨)</SelectItem>
        <SelectItem value="PAB">Panamanian Balboa (B/.)</SelectItem>
        <SelectItem value="PEN">Peruvian Sol (S/.)</SelectItem>
        <SelectItem value="PHP">Philippine Peso (₱)</SelectItem>
        <SelectItem value="PLN">Polish Złoty (zł)</SelectItem>
        <SelectItem value="GBP">Pound Sterling (£)</SelectItem>
        <SelectItem value="QAR">Qatari Rial (ر.ق)</SelectItem>
        <SelectItem value="RON">Romanian Leu (lei)</SelectItem>
        <SelectItem value="RUB">Russian Ruble (₽)</SelectItem>
        <SelectItem value="SAR">Saudi Riyal (ر.س)</SelectItem>
        <SelectItem value="RSD">Serbian Dinar (дин.)</SelectItem>
        <SelectItem value="SGD">Singapore Dollar (S$)</SelectItem>
        <SelectItem value="ZAR">South African Rand (R)</SelectItem>
        <SelectItem value="KRW">South Korean Won (₩)</SelectItem>
        <SelectItem value="SSP">South Sudanese Pound (£)</SelectItem>
        <SelectItem value="VES">Sovereign Bolivar (Bs.)</SelectItem>
        <SelectItem value="LKR">Sri Lankan Rupee (Rs)</SelectItem>
        <SelectItem value="SEK">Swedish Krona ( kr)</SelectItem>
        <SelectItem value="CHF">Swiss Franc (Fr)</SelectItem>
        <SelectItem value="THB">Thai Baht (฿)</SelectItem>
        <SelectItem value="TTD">Trinidad and Tobago Dollar ($)</SelectItem>
        <SelectItem value="TND">Tunisian Dinar (د.ت)</SelectItem>
        <SelectItem value="TRY">Turkish Lira (₺)</SelectItem>
        <SelectItem value="UGX">Ugandan Shilling (Sh)</SelectItem>
        <SelectItem value="UAH">Ukrainian Hryvnia (₴)</SelectItem>
        <SelectItem value="AED">United Arab Emirates Dirham (د.إ)</SelectItem>
        <SelectItem value="UYU">Uruguayan Peso ($)</SelectItem>
        <SelectItem value="UZS">Uzbekistan Som (so`m)</SelectItem>
        <SelectItem value="VND">Vietnamese Dong (₫)</SelectItem>
      </SelectContent>
    </Select>
  );
}
