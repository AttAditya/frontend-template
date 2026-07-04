import { Parallax } from "@components/block/parallax";
import { AccountButton } from "@components/kit/account-button";
import { BackButton } from "@components/kit/back-button";
import { Menu } from "@components/ui/structure/menu";
import { ScrollTopButton } from "@components/kit/scroll-top-button";
import { ThemeButton } from "@components/kit/theme-button";
import { Container } from "@components/ui/structure/container";
import { ContentFrame } from "@components/ui/structure/content-frame";
import { Top } from "@components/ui/structure/top";
import { HomeView } from "@components/view/home-view";
import { ErrorView } from "@components/view/not-found-view";
import { AuthPage } from "@routes/auth";
import { useClasses } from "@styles";
import { useForwarded } from "@utils/path";
import { type LayoutProps, useRouter } from "@utils/router";

function Layout({
  forwarded = [],
  dynamic = "",
  children
}: LayoutProps) {
  let path = "";

  if (dynamic)
    path = `/${dynamic}`;

  if (forwarded?.length)
    path += `/${forwarded?.join('/')}`;

  return (<>
    <Container attributes={{ id: "main" }}>
      <ContentFrame>
        <Top />
        <Menu position="top">
          <Container className={useClasses("menu-block")}>
            <BackButton path={path} />
          </Container>

          <Container className={useClasses("menu-block")}>
            <ScrollTopButton />
            <ThemeButton />
            <AccountButton />
          </Container>
        </Menu>

        {!!children ? children : (
          !dynamic
            ? <HomeView />
            : <ErrorView
              code={404}
              message={`Can't reach: ${path}`}
            />
        )}
      </ContentFrame>
    </Container>
  </>);
}

export function HomePage() {
  return useRouter(useForwarded(), Layout, {
    "auth": AuthPage,
  });
}

