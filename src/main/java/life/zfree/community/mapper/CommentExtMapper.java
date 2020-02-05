package life.zfree.community.mapper;

import life.zfree.community.model.Comment;

public interface CommentExtMapper {
    int incCommentCount(Comment record);
}