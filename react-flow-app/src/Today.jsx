function Today()
{

    const now= new Date();
    const dayOfMonth=now.getDate();
    const dayOfWeek=now.getDay();
    const MonthOfYear=now.getMonth();
    const year=now.getFullYear();

    const daysInWeek=['sunday','monday','tuesday','wednes day','thursday','friday','saturday']
    const monthsInYear=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']


    const day=daysInWeek[dayOfWeek]
    const month=monthsInYear[MonthOfYear]
     return(
        <>
        <h2>DAY:{day}</h2>
        <h2>DATE:{dayOfMonth}</h2>
        <h2>MONTH:{month}</h2>
        <h2>YEAR:{year}</h2>

        
        </>
     )

}
export default Today;