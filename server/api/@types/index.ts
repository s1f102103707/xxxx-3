/* eslint-disable */
export type Race = {
  id?: number | undefined
  date: string
  location: string
  distance: number
  condition: string
  horses?: HorseOnRace[] | undefined
}

export type HorseOnRace = {
  raceId?: number | undefined
  horseId: number
  name?: string | undefined
  jockeyId?: number | undefined
  odds?: number | null | undefined
}
