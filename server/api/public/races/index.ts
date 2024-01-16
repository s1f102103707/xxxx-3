/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** An array of races */
    resBody: Types.Race[]
  }

  post: {
    status: 201
    /** Race created successfully */
    resBody: Types.Race
    /** Race to be created */
    reqBody: Types.Race
  }
}
