import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header></header>

      <div className="page-content">{children}</div>
    </div>
  );
}
