import type { Route } from "./+types/subscriptions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Subscriptions() {
  return <main>hello subscriptions</main>;
}
