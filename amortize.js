
function pmt(rate,nper,pv) {
    var pvif, pmt;

    pvif = Math.pow( 1 + rate, nper);
    pmt = rate / (pvif - 1) * -(pv * pvif);   

    return pmt;
};
function compute_schedule(loan_amount, interest_rate, payments_per_year, years, payment) {
    var schedule = [];
    var remaining = loan_amount;
    var number_of_payments = payments_per_year * years;

    for (var i=0; i<=number_of_payments; i++) {
        var interest = remaining * (interest_rate/100/payments_per_year);
        var principle = (payment-interest);
        var row = [i, principle.toFixed(2), interest.toFixed(2), remaining.toFixed(2)];
        schedule.push(row);
        remaining -= principle
    }

    return schedule;
}
