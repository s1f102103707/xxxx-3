/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** Post updated successfully */
    resBody: Types.Post
    reqBody: Types.PostUpdate
  }

  delete: {
    status: 204
  }
}
