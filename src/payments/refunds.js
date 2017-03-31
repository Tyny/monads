/* Return Maybe<Result> */



function refund(payment) {
  return match(payment,
   "when", (p) => p.type === Payment.CASH, "then", Maybe.of(null), 
   "else", Maybe.of(Result.OK)
  );
}