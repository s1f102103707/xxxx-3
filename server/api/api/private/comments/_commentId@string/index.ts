/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  put: {
    status: 200;
    /** Comment updated successfully */
    resBody: Types.Comment;
    reqBody: Types.CommentUpdate;
  };

  delete: {
    status: 204;
  };
};
