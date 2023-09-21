import {
  BetPlaced as BetPlacedEvent,
  BettingClosed as BettingClosedEvent
} from "../generated/cricketBettingContract/cricketBettingContract"
import { BetPlaced, BettingClosed } from "../generated/schema"

export function handleBetPlaced(event: BetPlacedEvent): void {
  let entity = new BetPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.pool = event.params.pool
  entity.amount = event.params.amount
  entity.eventId = event.params.eventId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBettingClosed(event: BettingClosedEvent): void {
  let entity = new BettingClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.winningPool = event.params.winningPool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
