import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />

          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
