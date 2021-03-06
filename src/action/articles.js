export const GET_ARTICLE_IN_HOMEPAGE = "GET_ARTICLE_IN_HOMEPAGE";
export const getArticle = item => {
    return {
       type: GET_ARTICLE_IN_HOMEPAGE,
       payload: {
           params: {}
       },
        axiosPayload: {
           options: {
               // url: '/api/public/getArticle',
               url: '/api/answer/getTempCache',
               method: 'get',
               data: {}
           }
        }
    }
};

export const GET_TITLE_IMAGE = "GET_TITLE_IMAGE";
export const getTitleImage = () => {
    return {
        type: GET_TITLE_IMAGE,
        payload: {
            params: {}
        },
        axiosPayload: {
            url: '/api/public/getTitleImage',
            method: 'get',
            data: {}
        }
    }
};

export const GET_QUESTION_MODULE = "GET_QUESTION_MODULE";
export const getQuestion = () => {
    return {
        type: GET_QUESTION_MODULE,
        payload: {
            params: {}
        },
        axiosPayload: {
            options: {
                url: '/api/public/getQuestion',
                method: 'get',
                data: {}
            }
        }
    }
};

export const GET_QUESTION_DETAIL = "GET_QUESTION_DETAIL";
export const getQADetail = (id) => {
    console.log('log find qa..', id);
  return {
      type: GET_QUESTION_DETAIL,
      payload: {
          params: {}
      },
      axiosPayload: {
          options: {
              url: '/api/question/findQA',
              method: 'post',
              data: {
                  id
              }
          }
      }
  }
};

// 获取问答详情
export const GET_QUESTION_INFO = "GET_QUESTION_INFO";
export const getQuestionInfo = (id) => {
    console.log('log qa id.', id);
    return {
        type: GET_QUESTION_INFO,
        payload: {
            params: id
        },
        axiosPayload: {
            options: {
                url: `/api/question/getQaDetail?id=${id}`,
                method: 'get',
                data: {}
            }
        }
    }
};

export const TEST_DELIVER = "TEST_DELIVER";
export const testDeliver = (item) => {
    console.log('log item3.', item);
    return {
        type: TEST_DELIVER,
        payload: {}
    }
};

// 发布评论
export const PUB_COMMENT_INFOS = "PUB_COMMENT_INFOS";
export const pubCommentInfos = (info) => {
    console.log('log console comment.', info);
    return {
        type: PUB_COMMENT_INFOS,
        axiosPayload: {
            options: {
                url: '/api/answer/comment',
                method: 'post',
                data: info
            }
        }
    }
};

// 点赞评论
export const IS_LIKE_COMMENT = "IS_LIKE_COMMENT";
export const isLikeComment = (msg) => {
    console.log('log if comment like.', msg);
    return {
        type: IS_LIKE_COMMENT,
        axiosPayload: {
            options: {
                url: '/api/articles/commentlike',
                method: 'post',
                data: msg
            }
        }
    }
};
