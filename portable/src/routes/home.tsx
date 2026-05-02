import { About } from "@/routes/about";
import { useClasses } from "@/styles/styles";
import { useForwarded } from "@/utils/path";
import { LayoutProps, useRouter } from "@/utils/router";

function Layout({ dynamic, children, forwarded }: LayoutProps) {
  return <div className={useClasses("layout")}>
    <div className={useClasses("details")}>
      <h1>Portable</h1>
      <h2>Page: /{dynamic}</h2>
      <h3>Forwarded: {(forwarded??[]).join(' / ')}</h3>
    </div>
    
    <div className={useClasses("content")}>
      {children}
    </div>
  </div>
}

export function Home() {
  return useRouter(useForwarded(), Layout, {
    "about": () => <About />
  });
}

