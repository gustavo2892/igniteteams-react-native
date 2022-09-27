import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from '@assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon name="left" />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  );
};