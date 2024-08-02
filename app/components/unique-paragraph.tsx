export function UniqueParagraph({
  regularText,
  boldText,
}: {
  regularText?: string;
  boldText?: string;
}) {
  return (
    <p className="font-extralight text-lg dark:text-zinc-200">
      {boldText}{" "}
      <em className="not-italic text-zinc-500 dark:text-zinc-400">
        {regularText}
      </em>
    </p>
  );
}
