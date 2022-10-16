export function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
