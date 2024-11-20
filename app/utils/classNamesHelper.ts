export default function classNamesHelper(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }