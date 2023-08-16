import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SuymmaryCard } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SuymmaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 1.554,00</strong>
      </SuymmaryCard>
      <SuymmaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.893,00</strong>
      </SuymmaryCard>
      <SuymmaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 1.554,00</strong>
      </SuymmaryCard>
    </SummaryContainer>
  );
}
