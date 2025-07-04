export default async function POST(req, res) {
  const body = req.body;
 
  try {
    const car = await prisma.UserReservation.create({
      data: {
        userId: body.userId,
        carId: body.carId,
      },
    });
    // const booking = await prisma.booking.create({
    //   data: {
    //     carId: car.id,
    //     email: body.email,
    //     desiredVehicle: body.desiredVehicle,
    //     additionalNote: body.additionalNote,
    //     selectedDate: body.selectedDate,
    //     // selectedTime: body.selectedTime,
    //   },
    // });
    console.log("booking", booking);
    return NextResponse.json(booking);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}