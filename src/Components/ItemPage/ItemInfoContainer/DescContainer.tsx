import { ItemProp } from "./ItemInfoContainer";

export const DescContainer = ({ details }: ItemProp) => {
  const replaceSymbols = (text: string) => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&copy;/g, "©")
      .replace(/&reg;/g, "®")
      .replace(/&trade;/g, "™")
      .replace(/&euro;/g, "€")
      .replace(/&pound;/g, "£")
      .replace(/&yen;/g, "¥")
      .replace(/&sect;/g, "§")
      .replace(/&mdash;/g, "—")
      .replace(/&ndash;/g, "–")
      .replace(/&#39;/g, "'")
      .replace(/<br\s*\/?>/g, "\n");
  };
  if (!details.description) {
    return;
  }

  const regex = /<p>(.*?)<\/p>/gs;
  const matches = details.description.match(regex);
  const paragraphs = matches
    ? matches.map((match) => replaceSymbols(match.replace(/<\/?p>/g, "")))
    : [];
  return (
    <section className="col-span-3 ">
      <h1 className="font-bold text-5xl p-4">{details.name}</h1>
      {paragraphs.map((par, index) => (
        <p key={index} className="sm:p-6 p-2 text-2xl whitespace-pre-line">
          {par}
        </p>
      ))}
    </section>
  );
};
