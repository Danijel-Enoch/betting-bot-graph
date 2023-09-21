import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BetPlaced,
  BettingClosed
} from "../generated/cricketBettingContract/cricketBettingContract"

export function createBetPlacedEvent(
  user: Address,
  pool: BigInt,
  amount: BigInt,
  eventId: BigInt
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromUnsignedBigInt(pool))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )

  return betPlacedEvent
}

export function createBettingClosedEvent(winningPool: BigInt): BettingClosed {
  let bettingClosedEvent = changetype<BettingClosed>(newMockEvent())

  bettingClosedEvent.parameters = new Array()

  bettingClosedEvent.parameters.push(
    new ethereum.EventParam(
      "winningPool",
      ethereum.Value.fromUnsignedBigInt(winningPool)
    )
  )

  return bettingClosedEvent
}
