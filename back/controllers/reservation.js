// import Model
const User = require('../models/User')
const Reservation = require('../models/reservation')

exports.register = async (req, res) => {
  const { user, reservationData } = req.body

  // find User
  // if not, return error
  // create reservation

  try {

    let foundUser = await User.findOne({_id: user})
    if(!foundUser) {
      return res.status(400).json({
        success: false,
        message: 'Requested User has not found in database'
      })
    }

    let newReservation = await Reservation.create({
      user: foundUser,
      checkIn: reservationData.reservationDates.checkIn,
      checkOut: reservationData.reservationDates.checkOut,
      location: reservationData.location,
      reservedRoom: reservationData.rooms,
      usePoints: reservationData.specialRates.usePoints,
      travelAgents: reservationData.specialRates.travelAgents,
      AAARate: reservationData.specialRates.AAARate,
      AARPRate: reservationData.specialRates.AARPRate,
      SeniorRate: reservationData.specialRates.SeniorRate,
      GovRate: reservationData.specialRates.GovRate,
      PromoCode: reservationData.specialRates.Promo,
      GroupCode: reservationData.specialRates.GroupCode,
      CorpAccount: reservationData.specialRates.CorpAcc
    })

    if(!newReservation) {
      return res.status(400).json({
        success: false,
        message: 'Error at creating reservation on MongoDB'
      })
    }

    return res.status(200).json({
      success: true,
      reservation: newReservation
    })

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: 'Error at creating reservation on MongoDB'
    })
  }
}