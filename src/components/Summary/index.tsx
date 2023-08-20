import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SuymmaryCard } from "./styles";

import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const sumarry = useSummary();

  return (
    <SummaryContainer>
      <SuymmaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(sumarry.income)}</strong>
      </SuymmaryCard>
      <SuymmaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(sumarry.outcome)}</strong>
      </SuymmaryCard>
      <SuymmaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(sumarry.total)}</strong>
      </SuymmaryCard>
    </SummaryContainer>
  );
}
