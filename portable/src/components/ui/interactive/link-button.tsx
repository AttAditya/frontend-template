import * as iconoir from "@attaditya/iconoir-preact/regular";
import {
  ArrowRightRegular,
  ArrowUpRightRegular,
} from "@attaditya/iconoir-preact";

import { Link } from "@components/ui/interactive/link";
import { Container } from "@components/ui/structure/container";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface SocialLinkProps {
  icon?: keyof typeof iconoir;
  title?: string;
  url: string;
  urlText?: string;
  newTab?: boolean;
}

export function LinkButton({
  icon,
  title,
  url,
  urlText = url,
  newTab = true,
}: SocialLinkProps) {
  const IconComponent = icon ? iconoir[icon] : () => null;
  const RefIcon = newTab ? ArrowUpRightRegular : ArrowRightRegular;

  return (
    <Link url={url} newTab={newTab}>
      <Container className={useClasses("link-button")}>
        <Container className={useClasses("link-button-icon-container")}>
          <IconComponent className={useClasses("link-button-icon")} />

          {title && (
            <Text className={useClasses("link-button-title")}>
              {title}
            </Text>
          )}
        </Container>

        <Container className={useClasses("link-button-hover")}>
          <Text className={useClasses("link-button-hover-url")}>
            {urlText}
          </Text>

          <RefIcon className={useClasses("link-button-hover-icon")} />
        </Container>
      </Container>
    </Link>
  );
}

