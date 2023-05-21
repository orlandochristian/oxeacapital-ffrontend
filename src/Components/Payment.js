

function Payment({ payment }) {




  return (
    <tr>
      <td>
        Payment Amount: ${payment.paymentamount}
      </td>
      <td>
        Interest payed: ${payment.interestamount}
      </td>
      <td>
        Date: {payment.paymentdate}
      </td>
    </tr>
  );
}

export default Payment;