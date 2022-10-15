export function classNames(...classes: (string | false)[]) {
  return classes.filter(Boolean).join(" ");
}
