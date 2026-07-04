import { LinkButton } from "@components/ui/interactive/link-button";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function AuthView() {
  return (
    <Container className={useClasses("auth-view")}>
      <Heading size="medium">
        Let's bring you ready!
      </Heading>

      <Container className={useClasses("auth-options")}>
        <LinkButton
          newTab={false}
          url="/auth/in"
          urlText="Sign in to your account"
          title="I'm an existing user!"
          icon="PineTreeRegular"
        />

        <LinkButton
          newTab={false}
          url="/auth/up"
          urlText="Create a new account"
          title="I'm a new user!"
          icon="FlowerRegular"
        />
      </Container>
    </Container>
  );
}

